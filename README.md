# HoverMenu
* [Description](#description)
* [Install](#install)
* [Example](#example)
## Description
HoverMenu makes using context menus in projects easier.
## Install
1. Connect JQuery (worked since 1.9.1)
2. Connect HoveMenu
> CDN:
> https://d.fle.su/js/hovermenu.min.js
>
## Example
[JSFiddle](https://jsfiddle.net/Fleisar/1wb03yco/)
```html
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://d.fle.su/js/hovermenu.min.js"></script>
  <div class="context-menu" style="display:none"></div>
  <div class="block">Block</div>
  <div class="block">Block</div>
  <div class="block">Block</div>
```
```js
  hovermenu.init('.block',`<h1 stay>Context menu</h1>`)
```

