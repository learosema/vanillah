import test from 'ava';
import { parseHTML } from 'linkedom';

import vanillaH from './vanillah.mjs';

test('create a H1 element', t => {
  const { document } = parseHTML(`<body></body>`)
  const h = vanillaH(document);

  t.deepEqual(
    h('h1', null, 'Hello World').toString(),
    '<h1>Hello World</h1>'
  );
});

test('create a H1 element with a class', t => {
  const { document } = parseHTML(`<body></body>`)
  const h = vanillaH(document);

  t.deepEqual(
    h('h1', {className: 'red'}, 'Hello World').toString(),
    '<h1 class="red">Hello World</h1>'
  );
});

test('create a div with a class using the jsx-specific className attribute', t => {
  const { document } = parseHTML(`<body></body>`)
  const h = vanillaH(document);
  
  const node = h('div', {className: 'wrapper'});
  t.deepEqual(node.toString(), '<div class="wrapper"></div>');
});

test('create a label with a for attribute using the jsx-specific htmlFor attribute', t => {
  const { document } = parseHTML(`<body></body>`)
  const h = vanillaH(document);
  
  const node = h('label', {htmlFor: 'name'}, 'Name');
  t.deepEqual(node.toString(), '<label for="name">Name</label>');
});

test('create a nested DOM structure', t => {
  const { document } = parseHTML(`<body></body>`)
  const h = vanillaH(document);

  const node = h('div', { 'class': 'headline-wrapper' },
    h('h1', { id: 'hello-world' }, 'Hello World'),
    h('a', { href: '#hello-world', 'aria-labelledby': 'hello-world' },
      h('span', null, '#')
    )
  );

  const expectedHTML = [
    `<div class="headline-wrapper">`,
      `<h1 id="hello-world">Hello World</h1>`,
      `<a aria-labelledby="hello-world" href="#hello-world">`,
        `<span>#</span>`,
      `</a>`, 
    `</div>`
  ].join('');
  
  t.deepEqual(node.toString(), expectedHTML);
});

