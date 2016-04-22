// https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview#
// export type tagName = "div" | "span" | "ol" | "li" | "table" | "tr" | "td";
export type style = { style: string };
// export type child = [ tagName, style, string ] | [ "object", { "object": any, "config": any} ];
export type HTMLTemplate = any[];

export interface Formatter {
  header(object: any, config: any): HTMLTemplate;
  hasBody(object: any, config: any): boolean;
  body(object: any, config: any): HTMLTemplate;
}