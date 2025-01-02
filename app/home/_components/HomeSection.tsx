'use client';
import { getHomePromotions } from '@/app/admin/home/_service/HomePromotionsService';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import HomePromotionItem from '@/model/Item';
import { ItemDto } from '@/model/ItemDto';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Item from '@/model/Item';
import cookie from 'js-cookie';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import FilterPopUpComponent from '../_componentss/FilterPopUpComponent';

export default function HomeSection({
	items,
	className,
	categoriesToShow,
	flag,
	header,
	setCategoriesToShow,
	setFlag,
}: {
	items: Array<ItemDto>;
	className: string;
	categoriesToShow: string[];
	flag: boolean;
	header: string;
	setCategoriesToShow: (value: string[]) => void;
	setFlag: (value: boolean) => void;
}) {
	const router = useRouter();

	const handler = (item: Item) => {
		router.push('/' + item.link);
	};
	const [data, setData] = useState<ItemDto[]>([]);
	useEffect(() => {
		const rerender = () => {
			if (categoriesToShow.length == 0) {
				setData(items);
			} else {
				setData(
					items.filter((i) =>
						categoriesToShow.includes(
							i.item.category,
						),
					),
				);
			}
		};
		rerender();
	}, [flag]);
	const addCar = (item: any) => {
		cookie.set('items', parseInt(cookie.get('items') || '0') + 1);
		const itemsList = cookie.get('itemsList');
		const newItem = item.name + ':' + item.price;
		if (!itemsList) {
			cookie.set('itemsList', newItem);
		} else {
			cookie.set('itemsList', itemsList + '-' + newItem);
		}
	};

	return (
		<div className={'rounded-lg  ' + className}>
			<Card
				className={
					'outline-none smin:max-smax:p-0 smin:max-smax:m-0 smax:justify-items-center'
				}
			>
				<h1 className="flex p-4 text-2xl justify-self-center">
					{header}
				</h1>

				<div className="grid smin:max-smax:gap-y-4 smin:max-smax:m-0 smin:max-smax:gap-x-0 smin:max-smax:grid-cols-2  smax:grid-cols-3 smax:gap-y-24 smax:gap-x-8 smax:py-12 ">
					{data.map(
						(p) =>
							p.show && (
								<Card
									key={
										p
											.item
											.uniqueId
									}
									className={
										'smin:max-smax:h-56 smin:max-smax:flex smin:max-smax:flex-col smin:max-smax:justify-center smin:max-smax:p-4 smin:max-smax:m-0 smin:max-smax:w-44 transition smax:hover:-translate-y-1.5 animate-fadeIn smax:shadow-lg border-0 outline-none '
									}
								>
									<Link
										href={
											p
												.item
												.link
										}
										onClick={(
											e,
										) =>
											handler(
												p.item,
											)
										}
										className={
											'smin:max-smax:size-40 smax:size-52 grid grid-cols-1 grid-rows-2 '
										}
									>
										<CardHeader className="justify-self-center">
											<img
												src={
													p
														.item
														.imageUrl
												}
												width={
													100
												}
												height={
													100
												}
												alt="product"
											/>
										</CardHeader>
										<CardHeader className="justify-self-center place-items-center">
											<CardTitle>
												{'R$ ' +
													p
														.item
														.price}
											</CardTitle>
											<CardDescription>
												{
													p
														.item
														.name
												}
											</CardDescription>
										</CardHeader>
									</Link>
									<CardFooter className="smin:max-smax:p-4 smin:max-smax:flex smin:max-smax:justify-center ">
										<Button
											onClick={(
												e,
											) =>
												addCar(
													p.item,
												)
											}
											className="smin:max-smax:w-12 "
										>
											<ShoppingCart className="smax:hidden" />
											<p className="smin:max-smax:hidden">
												Adicionar
												ao
												Carrinho
											</p>
										</Button>
									</CardFooter>
								</Card>
							),
					)}
				</div>
			</Card>
		</div>
	);
}
