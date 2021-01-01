# drgtk-autocomplete README

Autocompletion ported to VSCode

To install, download the vsix file, locate it and then run  
`code --install-extension drgtk-autocomplete-0.0.1.vsix`

[Also requires that you use the runtime code from here](https://github.com/DragonRuby/company-dragonruby)
< The actual real work, I just ported stuff :)

## How to Use

`ctrl` + `shift` + `p` then run command `DRGTK: Autocomplete On` to turn on extension while editing `main.rb` (Only works in `main.rb` btw)

`main.rb` should look somewhat like this

```ruby
require 'runtime/autocomplete.rb'

def tick args
  args.gtk.suppress_mailbox = false

  # ... Rest of your code
end
```

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

### 1.0.1

You can just open main.rb and it should work?

### 1.0.0

Initial release of this extension