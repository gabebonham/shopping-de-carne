'use client';
import { Button } from '@/components/ui/button';
import cookie from 'js-cookie';
export default function AddCarButton({ item }: { item: any }) {
	const addCar = () => {
		cookie.set('items', parseInt(cookie.get('items') || '0') + 1);
		const itemsList = cookie.get('itemsList');
		const newItem = item.name + ':' + item.price;
		if (!itemsList) {
			cookie.set('itemsList', newItem);
		} else {
			cookie.set('itemsList', itemsList + '-' + newItem);
		}
	};
	return <Button onClick={addCar}>Adicionar ao Carrinho</Button>;
}
