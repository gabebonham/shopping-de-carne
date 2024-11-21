import { getProducts } from '@/app/admin/home/_service/ProductsService';
import { useRouter } from 'next/router';
import HomeSection from '../home/_components/HomeSection';
import Layout from '../home/_components/LayoutTemplate';
import ItemDto from '../../model/ItemDto';
import { CategoryEnum } from '@/app/_enums/Enums';
import Item from '@/model/Item';
import { useEffect } from 'react';
import Breadcrumbs from '../home/_components/BreadCrumbs';
import Branch from '@/model/BranchModel';
import { getBranches } from '@/app/admin/home/_service/CompanyService';
import MenuNavItem from '@/model/MenuNavItem';
import { getNavItems } from '@/app/admin/home/_service/MenuNavService';
import BreadCrumbItem from '@/model/BreadCrumbItem';

export async function getServerSideProps({ query }) {
	const category: string = query.category as string;
	const productss: Item[] = (await getProducts()) as Item[];
	const branches = (await getBranches()).map((b) => ({
		id: b.id,
		city: b.city,
	}));
	const items = (await getNavItems()).map((i) => ({
		title: i.title,
		link: i.link,
		subItems: [],
		id: i.id,
	}));
	const serializedProducts = productss.map((product) => ({
		item: product.mapToSimpleObject(),
		show: true,
	}));
	console.log(serializedProducts);
	return {
		props: {
			category,
			products: serializedProducts,
			branches,
			items,
		},
	};
}

export default function ProductsPage({
	items,
	category,
	products,
	branches,
}: {
	items: MenuNavItem[];
	branches: Branch[];
	category: string;
	products: ItemDto[];
}) {
	const router = useRouter();

	// Redirect to the correct category page only if category is valid
	useEffect(() => {
		if (
			category &&
			Object.values(CategoryEnum)
				.map((e) => e.toString())
				.includes(category)
		) {
			// Redirect to a default route if the category doesn't exist
			router.push('/products/' + category); // Or wherever you want to redirect
		}
	}, [category, router]);

	const breadCrumbs: BreadCrumbItem[] = [
		new BreadCrumbItem('Home', '/home'),
	] as BreadCrumbItem[];

	return (
		<Layout items={items} newBranches={branches}>
			<Breadcrumbs items={breadCrumbs} />
			<h1 className="justify-self-center text-3xl m-8">
				Todos os Produtos
			</h1>
			<div className="place-self-center w-7/12">
				<HomeSection
					className="shadow-sm"
					flag={true}
					gap={'20'}
					items={products}
				/>
			</div>
		</Layout>
	);
}
