# drgtk-autocomplete README

Autocompletion for VSCode

To install, download the vsix file, locate it and then run  
`code --install-extension drgtk-autocomplete-0.0.2.vsix`

If you get an error such as `-bash: code: command not found`, you first need to open up your command pallette (CMD+SHIFT+P in OSX, CNTRL+SHIFT+P in Windows)
in VSCode, and "install code command in PATH - this will make it available. 

Please use it with the latest version of DRGTK

## How to Use

`ctrl` + `shift` + `p` then run command `DRGTK: Autocomplete On` to turn on extension while editing `main.rb` (Only works in `main.rb` btw)

Make sure DRGTK is running while you use the extension in order for it to work properly

Include `$gtk.suppress_mailbox = false` in `main.rb` if you want the plugin to run a little faster, like so:

```ruby
def tick args
  $gtk.suppress_mailbox = false

  # Code ...
end
```

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

### 0.0.2

Now works on not Windows OSes

### 0.0.1

You can just open main.rb and it should work?

### 1.0.0

Initial release of this extension! Ignore the weird versioning.
