'use client';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Book } from 'lucide-react';
import cookie from 'js-cookie';
import { useState } from 'react';
import ItemsHistoryBodyComponent from './ItemsHistoryBodyComponent';
type listType = {
	name: string;
	price: string;
};
export default function ItemsHistoryComponent() {
	const [itemList, setItemList] = useState<listType[]>([]);
	const handler = async () => {
		const itemListString = cookie.get('itemsList') as string;
		if (itemListString) {
			const itemsDataList = itemListString.split('-');
			setItemList(
				itemsDataList.map((i) => {
					const list = i.split(':');
					return {
						name: list[0],
						price: list[1],
					};
				}),
			);
		} else {
			setItemList([]);
		}
	};
	return (
		<Popover>
			<PopoverTrigger asChild>
				<span className="flex w-36" onClick={handler}>
					<Book className="size-4" /> Histórico de
					Compras
				</span>
			</PopoverTrigger>
			<PopoverContent className="w-80 justify-items-center">
				<div className="p-4 flex">
					<p>Produtos:</p>
				</div>
				{itemList.length !== 0 ? (
					<ItemsHistoryBodyComponent
						items={itemList}
					/>
				) : (
					<p>Nenhum produto comprado.</p>
				)}
			</PopoverContent>
		</Popover>
	);
}
