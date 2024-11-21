import { getProducts } from './ProductsService';

async function getHomePromotions() {
	return (await getProducts()).filter((i) => i.isPromotion);
}

export { getHomePromotions };
