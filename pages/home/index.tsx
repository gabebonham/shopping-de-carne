import CarouselPlugin from './_components/Caroussel';
import { Breadcrumbs } from '@/pages/home/_components/BreadCrumbs';
import HomeSection from './_components/HomeSection';
import { getHomePromotions } from '@/app/admin/home/_service/HomePromotionsService';
import { getCarousselItems } from '@/app/admin/home/_service/CarousselService';
import { Separator } from '@/components/ui/separator';
import FilterMenu from './_components/FilterMenu';
import { CategoryEnum } from '@/app/_enums/Enums';
import { useState } from 'react';
import Item from '@/model/Item';
import { ItemDto } from './_dtos/ItemDto';
import { getBranches } from '@/app/admin/home/_service/CompanyService';
import LayoutTemplate from './_components/LayoutTemplate';
import { getNavItems } from '@/app/admin/home/_service/MenuNavService';

export async function getServerSideProps() {
	const items = (await getHomePromotions()).map((p) =>
		p.mapToSimpleObject(),
	);
	const menuItems = (await getNavItems()).map((i) => ({
		title: i.title,
		link: i.link,
		subItems: [],
		id: i.id,
	}));
	const branches = (await getBranches()).map((b) => ({
		id: b.id,
		city: b.city,
	}));
	return {
		props: {
			items,
			branches,
			menuItems,
		},
	};
}

export default function Home({ menuItems, items, branches }) {
	const allItems = items.map((i) => new ItemDto(i, true));
	const allBestItems = items.map((i) => new ItemDto(i, true));
	const carousselItems = getCarousselItems();
	const [showItems, setShowItems] = useState(allItems);
	const [showBestItems, setShowBestItems] = useState(allBestItems);
	let [categories, setCategories] = useState(
		Object.values(CategoryEnum).map((i) => i.toString()),
	);
	const constList = Object.values(CategoryEnum).map((i) => i.toString());
	const listLength = constList.length;
	let [categories2, setCategories2] = useState(
		Object.values(CategoryEnum).map((i) => i.toString()),
	);
	let [flag, setFlag] = useState(false);

	return (
		<LayoutTemplate items={menuItems} newBranches={branches}>
			<div>
				<CarouselPlugin items={carousselItems} />
				<h1 className="place-self-center mb-2">
					Ofertas
				</h1>
				<Separator className="w-60 place-self-center" />
				<div className="grid grid-cols-3 grid-rows-1 grid-flow-col auto-cols-max">
					<div className="place-items-center">
						<FilterMenu
							listLength={listLength}
							lista={categories}
							fun2={setCategories}
							fun={setShowItems}
							bol={setFlag}
						/>
					</div>
					<div className="col-span-2">
						<HomeSection
							key={JSON.stringify(
								showItems,
							)}
							flag={flag}
							items={showItems}
							className="shadow-sm"
							gap={'0'}
						/>
					</div>
				</div>
				<h1 className="place-self-center mb-2">
					Mais Vendidos
				</h1>
				<Separator className="w-60 place-self-center" />
				<div className="grid grid-cols-3 grid-rows-1 grid-flow-col auto-cols-max">
					<div className="place-items-center">
						<FilterMenu
							listLength={listLength}
							lista={categories2}
							fun2={setCategories2}
							fun={setShowBestItems}
							bol={setFlag}
						/>
					</div>
					<div className="col-span-2">
						<HomeSection
							key={JSON.stringify(
								showBestItems,
							)}
							flag={flag}
							items={showBestItems}
							gap={'0'}
							className="shadow-sm"
						/>
					</div>
				</div>
			</div>
		</LayoutTemplate>
	);
}
