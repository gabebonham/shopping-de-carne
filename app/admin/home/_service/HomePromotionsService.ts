import Item from '@/model/Item';
import { getProducts } from './ProductsService';

async function getHomePromotions() {
	return (await getProducts()).filter((i) => i.isPromotion) as Item[];
}

export { getHomePromotions };
