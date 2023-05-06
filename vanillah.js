/**
 * Create a h() function
 * @param {Document} document A DOM API providing at least createElement, setAttribute, appendChild, createTextNode
 * @returns {(tagName: string, attribs: Record<string, string>, ...children: any[]) => Element}
 */
export default function vanillaH(document) {
  return function h(tagName, attribs, ...children) {
    const el = document.createElement(tagName);
    for (const [attrib, value] of Object.entries(attribs || {})) {
      el.setAttribute(attrib === "className" ? "class" : attrib, value);
    }
    for (const child of children) {
      if (typeof child === "string") {
        el.appendChild(document.createTextNode(child));
        continue;
      }
      el.appendChild(child);
    }
    return el;
  }
}
