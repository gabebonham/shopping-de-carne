import { getProductByIdAndCategory } from '@/app/admin/home/_service/ProductsService';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Item from '@/model/Item';
import Breadcrumbs from '@/app/home/_components/BreadCrumbs';
import Layout from '@/app/home/_components/LayoutTemplate';
import { getBranches } from '@/app/admin/home/_service/CompanyService';
import { getNavItems } from '@/app/admin/home/_service/MenuNavService';
import BreadCrumbItem from '@/model/BreadCrumbItem';
import AddCarButton from '@/app/home/_components/AddCarButton';
type Params = Promise<{
	category: string;
	id: string;
}>;
export default async function ProductPage(props: { params: Params }) {
	const { category, id } = await props.params;
	const product = (await getProductByIdAndCategory(id, category)) as Item;

	const branches = (await getBranches()).map((b) => ({
		id: b.id,
		city: b.city,
	}));
	const items = (await getNavItems()).map((i) => ({
		title: i.title,
		link: i.link,
		subItems: i.subItems,
		id: i.id,
	}));
	const breadCrumbs: BreadCrumbItem[] = [
		new BreadCrumbItem('Home', '/home'),
		new BreadCrumbItem('Produtos', '/products'),
		new BreadCrumbItem(
			product.category,
			'/products/' + product.category,
		),
	] as BreadCrumbItem[];

	return (
		<>
			<Layout items={items} newBranches={branches}>
				<Breadcrumbs items={breadCrumbs} />
				<Card className="grid grid-cols-2 pt-20 pb-48">
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
							<AddCarButton
								item={product.mapToSimpleObject()}
							/>
						</CardFooter>
					</CardContent>
				</Card>
			</Layout>
		</>
	);
}
