import { getProducts } from '@/app/admin/home/_service/ProductsService';
import { useRouter } from 'next/router';
import HomeSection from '../home/_components/HomeSection';
import Layout from '../home/_components/LayoutTemplate';
import { ItemDto } from '../../model/ItemDto';
import { CategoryEnum } from '@/app/_enums/Enums';
import Item from '@/model/Item';
import { useEffect } from 'react';
import Breadcrumbs from '../home/_components/BreadCrumbs';
import Branch from '@/model/BranchModel';
import { getBranches } from '@/app/admin/home/_service/CompanyService';
import MenuNavItem from '@/model/MenuNavItem';
import { getNavItems } from '@/app/admin/home/_service/MenuNavService';
import BreadCrumbItem from '@/model/BreadCrumbItem';
import { redirect } from 'next/navigation';

export default async function ProductsPage() {
	const productss = ((await getProducts()) as Item[]).map((p) =>
		p.mapToSimpleObject(),
	);
	const products = productss.map((product) => ({
		item: product,
		show: true,
	})) as ItemDto[];
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
	// Redirect to the correct category page only if category is valid

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
					header=""
					categoriesToShow={Object.values(
						CategoryEnum,
					).map((c) => c.valueOf())}
					className=""
					flag={true}
					items={products}
				/>
			</div>
		</Layout>
	);
}
