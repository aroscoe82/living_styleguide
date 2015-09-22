#Living Styleguide

This is a base starting point for a living styleguide. Using [hologram](http://trulia.github.io/hologram/) this was developed to use your default sass stylesheets.

## How get started
1. clone repo
2. npm install
3. run grunt watch
4. style and document away!


### How it works

>Hologram is a Ruby gem that parses comments in your CSS and turns them into a beautiful style guide.

#### My Basic answer

By extending Markdown, documentation blocks are created.  In my example code, I have designated a basics category and a base category. The configuration in styleguide_config.yml has designated anything within the category of basics to be on the inital homepage.  A menu is generated for each category found.  Within each category you can create subcategories based on the title value.  

Each block starts with 
```
/*doc
---
title: Buttons
name: button
category: Base CSS
---
```

And Ends with
```
*/
```

Between that write basic Markdown, a great cheetsheet can be cound at [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code)

### Why I use it

It's a great way to develop a styleguide while styling your project. Why not use your notes & documentation to visually build a guide for refrence.  The guide its self uses the styles you are writing for the project, so it is a great representation of the visual design your creating.

### Credit where credit is due

Again, this is a base starting point implimenting Node Package Manager, Bower, and Grunt. The heavy lifting is done by [Hologram](http://trulia.github.io/hologram/#how). I simply added a few features.


[See Hologram](http://trulia.github.io/hologram/#how) documentation.


