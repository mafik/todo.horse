todo.horse
=======

todo.horse is a web-based *hierarchical text editor* (similar to [Org Mode](https://orgmode.org/)). You can visit it at http://todo.horse/ .

*todo.horse* hosts its own **tutorial** and changelog so everything you need to know, you can find in the *todo.horse* itself.

If you want to ask a question or submit a bug, use the GitHub issue tacking system.

Building
--------

To run local instance of *todo.horse*, execute `python -m http.server 8000`.

Importing data from Clearly.pl (former location of todo.horse)
------------------------------

If you have some data, stored on Clearly.pl, you can import it to *todo.horse* by running the following code in the browser console (hit `F12` or `Ctrl+Shift+C` when on *clearly.pl*, paste it into the *Console* tab and hit `Enter`):

```javascript
var f = document.createElement('iframe');
f.src = 'https://todo.horse';
f.style.display = 'none';
f.onload = function () {
  f.contentWindow.postMessage({
    type: "import",
    json: JSON.stringify(localStorage),
  }, '*');
};
document.body.appendChild(f);
```
