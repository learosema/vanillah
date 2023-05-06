/**
 * Create a h() function
 * @param {Document} document A DOM API providing at least createElement, setAttribute, appendChild, createTextNode
 * @returns {(tagName: string, attribs: Record<string, string>, ...children: any[]) => Element}
 */
export default function vanillaH(document: Document): (tagName: string, attribs: Record<string, string>, ...children: any[]) => Element;
