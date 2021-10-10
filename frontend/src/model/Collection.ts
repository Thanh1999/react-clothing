import { Item } from "./Item";

export class Collection {

    constructor(
        private _id: number,
        private _title: string,
        private _linkUrl: string,
        private _imageUrl: string,
        private _items: Array<Item>

    ) { }

    public get imageUrl(): string {
        return this._imageUrl;
    }
    public set imageUrl(value: string) {
        this._imageUrl = value;
    }

    public get items(): Array<Item> {
        return this._items;
    }
    public set items(value: Array<Item>) {
        this._items = value;
    }
    public get linkUrl(): string {
        return this._linkUrl;
    }
    public set linkUrl(value: string) {
        this._linkUrl = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}