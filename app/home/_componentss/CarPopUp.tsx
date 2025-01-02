'use client';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { ShoppingBasket } from 'lucide-react';
import cookie from 'js-cookie';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ItemsHistoryComponent from '../_components/ItemsHistoryComponent';
import ItemsHistoryBodyComponent from '../_components/ItemsHistoryBodyComponent';
type listType = {
	name: string;
	price: string;
};

export default function CarPopUp() {
	const pathname = usePathname();
	console.log(pathname);
	const [currentItems, setCurrentItems] = useState(0);
	const handler = () => {
		const items = cookie.get('items') || 0;
		setCurrentItems(items);
	};
	const removeItems = () => {
		cookie.remove('items', { path: '/' });
		cookie.remove('itemsList', {
			path: '/',
		});
		setCurrentItems(0);
	};
	const [itemList, setItemList] = useState<listType[]>([]);
	const [flag, set] = useState(false);

	const fetchItems = () => {
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

	useEffect(() => {
		fetchItems(); // Fetch items when the component mounts
	}, [flag]); // Empty dependency array ensures it runs once

	return (
		<Dialog>
			<DialogTrigger>
				<span
					className="flex items-center px-4"
					onClick={handler}
				>
					<ShoppingBasket className="mr-2" />
					Carrinho e Histórico de compras
				</span>
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader className="">
					<DialogTitle className=""></DialogTitle>
					<DialogDescription className="flex flex-col mt-8 ">
						<div className="p-4 flex">
							Itens: {currentItems}
						</div>
						{currentItems !== 0 ? (
							<div className="flex flex-col justify-center">
								<Button>
									Checkout
								</Button>
								<Button
									className="mt-4"
									onClick={
										removeItems
									}
								>
									Zerar
									Carrinho
								</Button>
							</div>
						) : (
							<div>
								Carrinho vazio.
							</div>
						)}
						<ItemsHistoryBodyComponent
							items={itemList}
						/>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
