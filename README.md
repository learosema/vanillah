# vanillaH

If you love JSX you don't necessarily need a JS framework like React. You can provide a `h()` function yourself and use Vanilla JS.
Essentially, all vanillaH provides is a h() function that creates DOM nodes using `document.createElement`, `Element.setAttribute`, `Element.appendChild` and `document.createTextNode`.

An [example using JSX](https://codepen.io/learosema/pen/GRYQKOe?editors=0010) is on Codepen.

This is essentially what vanillaH does. I don't know how useful it is to you. Maybe not. ☺️

## Getting started

vanillaH is available via NPM:

```sh
npm i vanillah
```

The vanillaH npm package provides a factory function where you pass in a `document` object (DOM API). 
It returns a h() function which can be used with JSX.

```jsx
import vanillaH from 'vanillah';

const h = vanillaH(document);

const snippet = <h1>Hello World</h1>

document.body.appendChild(snippet);
```

## Usage on Codepen

On Codepen, you can enable this by 
choosing "Babel" as preprocessor and adding a directive to use `h()` as a jsx factory:

```jsx
/* @jsx h */
import vanillaH from 'https://unpkg.com/vanillah?module';

const h = vanillaH(document);

const stuff = <h1>Hello World</h1>;

document.body.appendChild(stuff);
```

## Yeeting the transpile step

You can also use vanillaH without transpile step:

```js
h('div', {className: 'wrapper'}, 
  h('h1', null, 'Hello World')
);
```

This may be a bit cumbersome. But there's a library which allows you to use template strings, called [htm](https://github.com/developit/htm).

- [Example on Codepen](https://codepen.io/learosema/pen/QWZQWYQ/b63155c1d5e5e12c06da404e4700a763?editors=0011)

```js
import vanillaH from 'https://unpkg.com/vanillah?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const stuff = html`
  <div>
    <div className="headline-wrapper">
      <h1 id="hello-world">Hello World</h1>
      <a href="#hello-world">
        <span aria-hidden="true">#</span>
      </a>
    </div>
    <a href="https://lea.codes" aria-labelledby="hello-world" target="_blank">Hello world</a>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dolorem
      aspernatur saepe asperiores autem, rem architecto eos fugit officia sed.
      Soluta corrupti, facere iure quae accusamus velit consequuntur magni quia!
    </p>
  </div>
`;

document.body.appendChild(stuff);
```

## Usage on the server-side

You can use vanillaH on the server-side by using linkedom.

```js
import { parseHTML } from 'linkedom';
import htm from 'htm';
import vanillaH from 'vanillah';

const {
  window, document
} = parseHTML(`
  <!doctype html>
  <html lang="en">
    <head>
      <title>Hello SSR</title>
      <meta charset="UTF-8">
    </head>
    <body>
    </body>
  </html>
`);

const h = vanillaH(document);
const html = htm.bind(h);

document.body.appendChild(html`<h1>Hello World</h1>`);

console.log(document.toString());
```
