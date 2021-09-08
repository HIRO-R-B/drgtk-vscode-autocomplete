/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from 'vscode';
import * as http from 'http';

export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand('drgtk-autocomplete.on', () => {
    vscode.window.showInformationMessage('Hello World from drgtk-autocomplete!');
  });

  const provider = vscode.languages.registerCompletionItemProvider(
    'ruby',
    {
      async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        const ws = vscode.workspace;

        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('.')) {
          return undefined;
        }

        const content = JSON.stringify({
          code: `
begin
$result = $gtk.suggest_autocompletion index: ${document.offsetAt(position)}, text: <<-S
${document.getText()}
S
$result = $result.join("\n")
rescue => e
  $result = ''
end
          `,
        });

        const request = new Promise<string | undefined>((resolve, reject) => {
          const options = {
            hostname: 'localhost',
            port: 9001,
            path: '/dragon/eval/',
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              "Content-Length": content.length,
            }
          };

          const req = http.request(options, res => {
            res.on('data', d => resolve(d.toString()));
          });

          // No connection, etc.
          req.on('error', error => resolve(undefined));

          req.write(content);
          req.end();
        });

        const completions = await request;
        if (completions) {
          return completions.split('\n').map((str: string) => new vscode.CompletionItem(str, vscode.CompletionItemKind.Method));
        } else {
          vscode.window.showInformationMessage('DO YOU HAVE DRAGONRUBY OPENED?!');
        }

        return undefined;
      }
    },
    '.' // triggered whenever a '.' is being typed
  );

  context.subscriptions.push(disposable, provider);
}

export function deactivate() {
  return undefined;
}