export default class MenuNavItem {
	id: string;
	title: string;
	link: string;
	subItems: string[];
	constructor(
		id: string,
		title: string,
		link: string,
		subItems: string[],
	) {
		this.title = title;
		this.link = link;
		this.subItems = subItems;
		this.id = id;
	}
}
