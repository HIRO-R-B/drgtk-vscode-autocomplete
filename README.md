# drgtk-autocomplete README

Autocompletion ported to VSCode

To install, download the vsix file, locate it and then run  
`code --install-extension drgtk-autocomplete-0.0.1.vsix`

[Also requires that you use the runtime code from here](https://github.com/DragonRuby/company-dragonruby)
< The actual real work, I just ported stuff :)

## How to Use

`ctrl` + `shift` + `p` then run command `DRGTK: Autocomplete On` to turn on extension while editing `main.rb`

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

Very first release

### 1.0.0

Initial release of this extension