# fakemenu

Simple Javascript and CSS library for creating platform look-alike context menus for confusing people on their right-clicks.

## Usage

Link in `fakemenu.css` as a stylesheet and load the `fakemenu.js` script at the end of your page's body. Then call functions (addItem, addSep) on the object provided by fakemenu() and then finally .build(), which outputs HTML for you to insert anywhere.

**Example**
`document.body.innerHTML += fakemenu().addItem('Item 1', function() { // Called for item 1 }).addItem('Item 2 (disabled)', null, true).build()`

**fakemenu() Reference**

`.addItem(title, func, disabled)`: add an item to the context menu
`.addSep()`: add a separator to the context menu
`.build()`: generate HTML for the context menu, you may optionally provide a position (`.build(x, y)`) for the context menu to float at.
