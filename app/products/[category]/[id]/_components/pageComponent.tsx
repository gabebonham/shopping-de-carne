'use client';

import AddCarButton from '@/app/home/_components/AddCarButton';
import Breadcrumbs from '@/app/home/_components/BreadCrumbs';
import LayoutTemplate from '@/app/home/_components/LayoutTemplate';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function PageComponent({
	items,
	branches,
	breadCrumbs,
	product,
}: {
	items: any[];
	branches: any[];
	breadCrumbs: any[];
	product: any;
}) {
	return (
		<LayoutTemplate items={items} newBranches={branches}>
			<Breadcrumbs items={breadCrumbs} />
			<Card className="grid grid-cols-2 pt-20 pb-48 m-4">
				<CardHeader className="justify-self-end">
					<img
						className="rounded-lg justify-self-center outline outline-gray-300"
						src={product.imageUrl}
						alt="product"
						width={300}
						height={300}
					/>
				</CardHeader>
				<CardContent className="p-8">
					<CardTitle>
						<p className="pl-24 pb-8">
							{product.name}
						</p>
						<CardDescription className="text-2xl">
							{product.price}
						</CardDescription>
					</CardTitle>
					<CardDescription className="w-1/2">
						{product.description}
					</CardDescription>
					<CardFooter className="h-full">
						<AddCarButton item={product} />
					</CardFooter>
				</CardContent>
			</Card>
		</LayoutTemplate>
	);
}
