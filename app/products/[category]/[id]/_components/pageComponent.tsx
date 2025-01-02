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
			<Card className="flex smin:max-smax:flex-col pt-20 pb-48 m-4 smax:justify-center w-auto">
				<CardHeader className=" smin:max-smax:w-full smin:max-smax:h-full">
					<img
						className="smin:max-smax:hidden rounded-lg justify-self-center outline outline-gray-300"
						src={product.imageUrl}
						alt="product"
						width={300}
						height={300}
					/>
					<img
						className="smax:hidden rounded-lg justify-self-center outline outline-gray-300"
						src={product.imageUrl}
						alt="product"
						width={500}
						height={500}
					/>
				</CardHeader>
				<CardContent className="p-8  smax:w-96 smin:max-smax:flex smin:max-smax:flex-col smin:max-smax:justify-center">
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
					<CardFooter className=" smax:w-fit h-full smin:max-smax:flex smin:max-smax:justify-center">
						<AddCarButton item={product} />
					</CardFooter>
				</CardContent>
			</Card>
		</LayoutTemplate>
	);
}
