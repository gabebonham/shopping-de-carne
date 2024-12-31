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

export default function HomeSection({
	items,
	className,
	categoriesToShow,
	flag,
	header,
}: {
	items: Array<ItemDto>;
	className: string;
	categoriesToShow: string[];
	flag: boolean;
	header: string;
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
			<Card className={'outline-none justify-items-center'}>
				<h1 className="p-4 text-2xl">{header}</h1>
				<div className="grid grid-cols-3 gap-y-24 gap-x-8 py-12 w-auto">
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
										'transition hover:-translate-y-1.5 animate-fadeIn shadow-lg border-0 outline-none '
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
											' size-52 grid grid-cols-1 grid-rows-2 '
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
									<CardFooter>
										<Button
											onClick={(
												e,
											) =>
												addCar(
													p.item,
												)
											}
										>
											Adicionar
											ao
											Carrinho
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
