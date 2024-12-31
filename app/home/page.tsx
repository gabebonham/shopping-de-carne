import CarouselPlugin from './_components/Caroussel';
import { getHomePromotions } from '@/app/admin/home/_service/HomePromotionsService';
import { getCarousselItems } from '@/app/admin/home/_service/CarousselService';
import { Separator } from '@/components/ui/separator';
import { ItemDto } from '../../model/ItemDto';
import { getBranches } from '@/app/admin/home/_service/CompanyService';
import LayoutTemplate from './_components/LayoutTemplate';
import { getNavItems } from '@/app/admin/home/_service/MenuNavService';
import DisplayProductsComponent from './_componentss/DisplayProductsComponent';

export default async function Home() {
	const carousselItems = (await getCarousselItems()).map((i) => ({
		imageUrl: i.imageUrl,
	}));
	const menuItems = (await getNavItems()).map((i) => ({
		title: i.title,
		link: i.link,
		subItems: i.subItems,
		id: i.id,
	}));
	const allItems = (await getHomePromotions()).map((p) => ({
		item: p.mapToSimpleObject(),
		show: true,
	}));
	const branches = (await getBranches()).map((b) => ({
		id: b.id,
		city: b.city,
	}));

	return (
		<LayoutTemplate items={menuItems} newBranches={branches}>
			<div>
				<CarouselPlugin items={carousselItems} />

				<DisplayProductsComponent
					header="Ofertas"
					items={allItems}
				/>
				<Separator className="w-60 place-self-center" />
				<DisplayProductsComponent
					header="Mais Vendidos"
					items={allItems}
				/>
				<Separator className="w-60 place-self-center" />
			</div>
		</LayoutTemplate>
	);
}
