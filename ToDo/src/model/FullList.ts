import ListItem from "./ListItem";

interface List {
  List: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(itemObj: ListItem): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }
  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }
  //   Load()
  //  clearList()
  // remove item
}
