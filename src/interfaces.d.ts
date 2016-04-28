// https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview#
// export type tagName = "div" | "span" | "ol" | "li" | "table" | "tr" | "td";
export type style = { style: string };
// export type child = [ tagName, style, string ] | [ "object", { "object": any, "config": any} ];
export type HTMLTemplate = any[];

export interface Formatter {
  accept(object: any): boolean;
  preview(object: any): any;
  hasChildren(object: any): boolean;
  children(object: any): { name: string, value: any }[];
}

export interface config {
  propertyName: string;
}
