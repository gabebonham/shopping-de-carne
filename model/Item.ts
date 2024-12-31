export default class Item {
	uniqueId: number;
	id: string;
	price: number;
	name: string;
	imageUrl: string;
	link: string;
	category: string;
	description: string;
	isPromotion: boolean;
	isBestSeller: boolean;

	constructor(
		uniqueId: number,
		id: string,
		price: number,
		name: string,
		imageUrl: string,
		link: string,
		category: string,
		description: string,
		isPromotion: boolean,
		isBestSeller: boolean,
	) {
		this.uniqueId = uniqueId;
		this.id = id;
		this.price = price;
		this.name = name;
		this.imageUrl = imageUrl;
		this.category = category;
		this.link = this.generateLink(category, id);
		this.description = description;
		this.isPromotion = isPromotion;
		this.isBestSeller = isBestSeller;
	}
	private generateLink(category: string, id: string): string {
		return `/products/${category}/${id}`;
	}
	public mapToSimpleObject() {
		return {
			uniqueId: this.uniqueId,
			id: this.id,
			name: this.name,
			category: this.category,
			price: this.price,
			description: this.description,
			imageUrl: this.imageUrl,
			link: this.link,
			isBestSeller: this.isBestSeller,
			isPromotion: this.isPromotion,
		};
	}
}
