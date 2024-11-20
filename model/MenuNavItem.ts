export class MenuNavItem {
	id: string;
	title: string;
	link: string;
	subItems: MenuNavItem[];
	constructor(
		id: string,
		title: string,
		link: string,
		subItems: MenuNavItem[],
	) {
		this.title = title;
		this.link = link;
		this.subItems = subItems;
		this.id = id;
	}
	public subItemsToString(): string {
		let stringObject = '';
		let counter = 0;
		if (this.subItems.length == 0 && counter == 0) {
			return 'Vazio';
		}
		this.subItems.forEach((i) => {
			counter++;
			stringObject.concat(i.subItemsToString() + '>');
			stringObject.concat('; ');
		});
		return this.title;
	}
}
