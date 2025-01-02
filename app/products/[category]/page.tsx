import { getBranches } from '@/app/admin/home/_service/CompanyService';
import { getNavItems } from '@/app/admin/home/_service/MenuNavService';
import { getProductsByCategory } from '@/app/admin/home/_service/ProductsService';
import Branch from '@/model/BranchModel';
import Item from '@/model/Item';
import MenuNavItem from '@/model/MenuNavItem';
import Breadcrumbs from '@/app/home/_components/BreadCrumbs';
import HomeSection from '@/app/home/_components/HomeSection';
import Layout from '@/app/home/_components/LayoutTemplate';
import { ItemDto } from '@/model/ItemDto';
import BreadCrumbItem from '@/model/BreadCrumbItem';
import LayoutTemplate from '@/app/home/_components/LayoutTemplate';
import DisplayProductsComponent from '@/app/home/_componentss/DisplayProductsComponent';
type Params = Promise<{
	category: string;
}>;
export default async function CategoryPage(props: { params: Params }) {
	const { category } = await props.params;
	const products = (await getProductsByCategory(category)) as Item[];
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
	const serializedProducts = products.map((product) => ({
		item: product.mapToSimpleObject(),
		show: true,
	})) as ItemDto[];
	const breadCrumbs: BreadCrumbItem[] = [
		new BreadCrumbItem('Home', '/home'),
		new BreadCrumbItem('Produtos', '/products'),
	] as BreadCrumbItem[];
	return (
		<LayoutTemplate items={items} newBranches={branches}>
			<Breadcrumbs items={breadCrumbs} />
			<DisplayProductsComponent
				showFilter={false}
				header={category}
				items={serializedProducts}
			/>
		</LayoutTemplate>
	);
}
