import { TextDecoder, TextEncoder } from 'util';
import * as vscode from 'vscode';

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

        const fileName = document.fileName;
        if (!fileName.endsWith('main.rb')) {
          return undefined;
        }

        var folder = document.uri.path.slice(0, -8);
        if (!folder.endsWith('/app')) {
          return undefined;
        }

        const enc = new TextEncoder();
        const mailboxUri = vscode.Uri.file(`${folder}/mailbox.rb`);
        const mailboxProcessedUri = vscode.Uri.file(`${folder}/mailbox-processed`);
        const autocompleteUri = vscode.Uri.file(`${folder}/autocomplete.txt`);
        const content =
`suggestions = $gtk.suggest_autocompletion index: ${document.offsetAt(position)}, text: <<-S
${document.getText()}
S
$gtk.write_file 'app/autocomplete.txt', suggestions.join("\\n")`;

        try {
          ws.fs.delete(mailboxProcessedUri, { recursive: true, useTrash: false });
        } catch { }
        try {
          await ws.fs.delete(autocompleteUri, { useTrash: false });
        } catch { }
        ws.fs.writeFile(mailboxUri, enc.encode(content));

        for (var i = 0; i < 20; i++) {
          let flag = false;
          await new Promise(r => setTimeout(r, 50));
          try {
            await vscode.workspace.fs.stat(autocompleteUri);
            flag = true;
          } catch { }
          if (flag) { break; }
          if (i === 20) { return undefined; }
        }

        const completions = ws.fs.readFile(autocompleteUri);
        var items = (await completions).toString();
        return items.split('\n').map(s => new vscode.CompletionItem(s, vscode.CompletionItemKind.Method));
      }
    },
    '.' // triggered whenever a '.' is being typed
  );

  context.subscriptions.push(disposable, provider);
}