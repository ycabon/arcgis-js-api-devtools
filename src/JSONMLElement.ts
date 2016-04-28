export type tagName = "div" | "span" | "ol" | "li" | "table" | "tr" | "td" | "object";

export default class JSONMLElement {
  
  constructor(tagName: tagName) {
    this._attributes = {};
    this._jsonML = [tagName, this._attributes];
  }
  
  private _attributes: { [key: string]: any };
  private _jsonML: any[];
  
  appendChild(element: JSONMLElement) {
    this._jsonML.push(element.toJSONML());
  }

  createChild(tagName: tagName) {
    var child = new JSONMLElement(tagName);
    this.appendChild(child);
    return child;
  }

  createObjectTag(object: any) {
    var tag = this.createChild("object");
    tag.addAttribute("object", object);
    return tag;
  }

  setStyle(style: string){
    this._attributes["style"] = style;
  }

  addAttribute(key: string, value: any) {
    this._attributes[key] = value;
  }

  createTextChild(text: any) {
    this._jsonML.push(text + "");
  }

  toJSONML() {
    return this._jsonML; 
  }
}