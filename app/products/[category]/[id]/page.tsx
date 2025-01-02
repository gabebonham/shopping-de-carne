import { getProductByIdAndCategory } from '@/app/admin/home/_service/ProductsService';

import { getBranches } from '@/app/admin/home/_service/CompanyService';
import { getNavItems } from '@/app/admin/home/_service/MenuNavService';
import PageComponent from './_components/pageComponent';
type Params = Promise<{
	category: string;
	id: string;
}>;
export default async function ProductPage(props: { params: Params }) {
	const { category, id } = await props.params;
	const product = await getProductByIdAndCategory(id, category);

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
	const breadCrumbs = [
		{ name: 'Home', link: '/home' },
		{ name: 'Produtos', link: '/products' },
		{
			name: category,
			link: '/products/' + category,
		},
	];

	return (
		<PageComponent
			branches={branches}
			breadCrumbs={breadCrumbs}
			items={items}
			product={product?.mapToSimpleObject()}
		/>
	);
}
