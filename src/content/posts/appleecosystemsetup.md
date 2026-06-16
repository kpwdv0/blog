---
title: "my apple ecosystem setup"
date: 2026-05-18
category: cs
readTime: 10
description: "vim, e-ink, hacker vibes"
thumbnail: /images/appleecosystemsetup/thumbnail.png
---
![thumbnail](/images/appleecosystemsetup/thumbnail.png)

A couple months ago, I completely riced my computer. I'm actually really proud of my computer setup, and it's served me well for the few months I've had it. For reference, I'm going for a vim-like configuration (so I can surf the web without touching my mouse, only through keystrokes), an e-ink aesthetic (my friend referred to it as "cute goth" [is it???]), and something very minimal. My biggest goals were:

- reduce the visual clutter
- rely less on my mouse
- make multitasking smoother
- keep everything aesthetically cohesive
- make my computer fun to use again (instead of having to buy another computer)

## Grayscale.
I, most notably, changed my entire computer to grayscale (maybe I should update my blog to be monochrome as well) [update: just did!!]. My iphone's been in grayscale for quite some time now, but I infected my mac and iPad because I read somewhere, probably Hacker news, that it's supposed to improve productivity. It's certainly made youtube less appealing, but I haven't noticed a stark difference (most apps I use are mostly monochromatic anyways). I do like the aesthetic, and the only inconvenience I've found is viewing pictures or design (or playing wordle).

I also created a shortcut toggle to turn the filter off and on, which is useful for when I occasionally need the color back.

## Wallpaper.
My wallpaper is a picture I found on Pinterest of Yoru from Chainsaw Man. I just finished watching the anime with my boyfriend, and I wanted something that matched the rest of the setup aesthetically. The initial picture was actually very pixelated, especially on such a big screen, so I used AI to sharpen the image. I think it turned out great.

## Terminal Stack
I spend most of my time in the terminal, so this is basically the center of the whole setup.

Instead of the default terminal app, I use an app called iTerm2. It's a much more customizable terminal emulator with tabs and split panes, transparency effects, custom fonts, better hotkey support, and just advanced shell integration. The biggest reason I switched was honestly just aesthetics (the transparent title bar and blue effects makes everything look so much cleaner).

Things I changed:

- Hack nerd font
- Transparent background
- Monochrome color preset (through settings, it's pretty easy)
- Hidden tab bar

If you're trying to replicate my setup I actually recommend using Kitty instead. Kitty is configured entirely through a single config file, which is much easier to sync between machines or include in dotfiles. With iTerm2, my settings are scattered across plist files, which gets really annoying fast. I'm too lazy to switch to Kitty, but I'll probably make that move at some point…

I use Homebrew for everything (I think most people do, so no explanation here!). For Zsh, I added:

- syntax highlighting
- autosuggestions
- aliases
- history search
- custom prompt! <3

### CLI tools I love:
- **eza**: better ls (tree views, git status indicators, icons)
- **bat**: better cat (syntax highlighting, line numbers)
- **fd**: better find (find syntax is just… horrifying, fd is so much simpler)
- **ripgrep**: better grep (extremely fast!!!)
- **fzf**: fuzzy finder (one of my favorite tools ever, let's you fuzzy-search files, command history, git branches, basically anything)
- **zoxide**: better cd (remembers your frequently visited directories so you don't have to type the entire file path everytime)
- **lazygit**: git tui (instead of memorizing all of the git commands, you get a pretty terminal ui for panels, commits, staging, branching and diffs!)
- **atuin**: shell history sync/search
- **fastfetch**: system info (pure aesthetic honestly, I changed my fastfetch picture/logo thing to an ASCII cat and added some custom text. It's one of the things I'm most proud of and I think it looks adorable).
- **pomo**: pomodoro timer in your terminal! super useful
- more random ones you definitely don't need: cmatrix, asciiquarium, cowsay

### tmux
Tmux is definitely one of the most important terminal tools I use. It includes:

- multiple terminal sessions
- persistent sessions
- split panes
- detachable workspaces

So, even if you close your terminal, your sessions keep running and you can reconnect later! You can also organize workflows into windows/panes, so I usually have my code editor on the left, and on the right, terminal on the top and my pomodoro timer on the bottom!

### neovim
I originally started learning vim motions because I thought they looked cool, but I think they genuinely became faster. I absolutely adore it.

Configuring neovim completely from scratch is terrifying (who would ever do this), so I use LazyVim, which gives you:

- plugin management
- very very sensible defaults
- lsp setup
- treesitter
- telescope
- file explorer
- git integration

### doom emacs
Yes, I use both neovim and emacs simultaneously, which sounds ridiculous but actually works really well! I use neovim for coding and doom emacs for my notes/thoughts/research. Doom emacs, in comparison to emacs, adds very sane defaults, vim keybindings, cleaner configuration, and, in general, just a faster setup.

I especially love org-mode, org-rome, backlinking, structured notes, folding, and agenda views. You can turn all of your notes into a giant interconnected wiki-like thing. I honestly want to write another article about how powerful doom emacs is because it's my favorite thing ever!

## System tools

### yabai
Yabai is a tiling windows manager, and it's honestly the best upgrade I've made. It's inspired by linux window manager like i3 and bspwn, so: instead of manually dragging windows around, the windows automatically tile an the layouts stay organized! Opening a new window automatically places it, and the windows resize dynamically. My favorite feature is the mouse autofollow - so the focus automatically follows the window your mouse hovers over. It makes the system feel so fluid.

If you get yabai, skhd is a must: it lets you use keyboard shortcuts to run yabai commands. I have commands to focus on different windows, move the windows, toggle window fullscreen, toggle window "float" (remove it from the tiling system). I also have a hotkey to restart yabai just in case anything goes wrong.

A lot of people recommend disabling SIP before setting up yabai, but I've honestly been able to go as far as I wanted without it.

### raycast
Raycast is genuinely the spotlight killer (as it is famously known). You press opt-space to, like spotlight, open up a laucher/search bar. But, unlike spotlight, you can customize it entirely to your liking. You can create aliases to run different commands. I use it for opening apps, spotify controls, google calendar, snippet, website shortcuts, and running scripts. I don't think I've used raycast to its full potential, so I'm curious to see what other people have done with it!

### maccy
A little clipboard manager!!! Super helpful and has saved me so many times. (self explanatory hehe)

### hiddenbar
Honestly, I haven't used hiddenbar a lot and it hasn't made a huge difference. It hides some of the extra menu bar icons. Mac menu bars become cluttered really quickly with developer tools.

### simplebar
Simple Bar replaces the default mac menu bar. I actually hide the default bar entirely and use simplebar instead. It has a cleaner appearance, customizable widgets, and matches my monochrome aesthetic. My favorite feature is that it'll show you what tabs are open at each window, so you can easily remember where everything is.

A lot of people use SketchBar instead. It's more powerful and scriptable, but configuration didn't seem to work (it kept erroring) and seemed to conflict with yabai. (I got lazy lol). Simplbar was so much easier - there's a GUI settings app and easy theming.

## Overall thoughts
Honestly, this setup has made me enjoy using my computer so much more. This customization may be (mostly aesthetic), but it looks super cool and makes my mac feel… better :)

You don't have to replicate my exact setup, but I recommend customizing your environment so it feels less like a generic machine and more like something unique!

Love,
Kira
