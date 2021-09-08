# drgtk-autocomplete README

Autocompletion for VSCode (**Experimental**: Don't expect a smooth and complete experience)

## Installation
First download the vsix file  

#### Through VSCode
Open your extensions in the sidebar (`ctrl+shift+x`)  
Open the views and more actions (The ellipses towards the top right)  
Choose `Install from VSIX...` and then find and install the vsix you downloaded

#### By terminal
locate the vsix file and then run something like below in command prompt  
(after replacing the relavant parts inside the brackets `[]`, including the brackets)  
`code --install-extension [path_to]/drgtk-autocomplete-[X.X.X].vsix`

If you get an error such as `-bash: code: command not found`, you first need to open up your command pallette (CMD+SHIFT+P in OSX, CNTRL+SHIFT+P in Windows)
in VSCode, and "install code command in PATH" - this will make it available. 

Please use it with the latest version of DRGTK

## How to Use

`ctrl` + `shift` + `p` then run command `DRGTK: Autocomplete On` to turn on the extension

Make sure DRGTK is running while you use the extension in order for it to work properly

## Caveats

Doesn't work with everything. (e.g. you can't use it on integers/floats... yet??)

## Features

Uh, completion, and that I think it works

## Requirements

Stuff, things

## Extension Settings

Nothing

## Known Issues

Don't know

## Release Notes

Bugfixos

### 0.0.3

Now uses HTTP! No longer only restricted to `main.rb`

### 0.0.2

Now works on not Windows OSes

### 0.0.1

You can just open main.rb and it should work?

### 1.0.0

Initial release of this extension! Ignore the weird versioning.
