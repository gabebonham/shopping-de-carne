import Item from "@/model/Item";

export class ItemDto {
    item:Item;
    show:boolean;
    constructor(item:Item, show:boolean){
        this.item = item;
        this.show = show;
    }
}