import Image from 'next/image';
import logo from '@/public/logoMeat.png';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import MenuBar from './MenuBar';
import FooterAcordeon from '@/app/home/_components/FooterAcordeon';
import FooterInfo from './FooterInfo';
import { BaggageClaim, Book } from 'lucide-react';
import ComboboxDemo from './ComboBox';
import Branch from '@/model/BranchModel';
import { getBranches } from '@/app/admin/home/_service/CompanyService';
import LoginButton from './LoginButton';
import MenuNavItem from '@/model/MenuNavItem';
import CarComponent from './CarComponent';
import ItemsHistoryBodyComponent from './ItemsHistoryComponent';
import ItemsHistoryComponent from './ItemsHistoryComponent';
import EditSiteComponent from './EditSiteComponent';

export default function LayoutTemplate({
	items = [],
	newBranches = [],
	children,
}: {
	items: MenuNavItem[];
	newBranches: any;
	children: React.ReactNode;
}) {
	const contactInfo = [
		{ title: 'Contate-nos', link: '/em-construcao' },
		{ title: 'Minha conta', link: '/em-construcao' },
		{ title: 'Sobre nós', link: '/em-construcao' },
	];

	const manufacturerInfo = [
		{ title: 'Contate-nos', link: '/em-construcao' },
		{ title: 'Minha conta', link: '/em-construcao' },
		{ title: 'Sobre nós', link: '/em-construcao' },
	];

	const footerInfo = [manufacturerInfo, contactInfo];

	return (
		<div
			id="parentOfEditComponent"
			className=" bg-[rgba(60,60,60,0.5)] "
		>
			<header className="sticky top-0 z-50 shadow-lg bg-[rgba(10,10,10,0.5)]">
				<div className="py-2 px-8 h-28 flex flex-row">
					<Image
						alt="logo"
						src={logo}
						className="size-24 mx-8"
					/>
					<Input
						placeholder="Pesquisa..."
						className="w-6/12 self-center drop-shadow-md"
					/>
					<button className="flex text-xs w-auto mt-10 px-8 text-white">
						<ItemsHistoryComponent />
					</button>
					<button className="flex text-xs w-auto mt-10 pl-2 pr-4 text-white">
						<CarComponent />
					</button>
					<ComboboxDemo branches={newBranches} />
					<LoginButton className="flex self-center shadow-lg bg-black text-white" />
				</div>
				<MenuBar items={items} />
			</header>
			<div className="">
				{children}
				<EditSiteComponent />
			</div>

			<footer
				className={`grid grid-cols-${
					footerInfo.length + 1
				} grid-rows-1 bg-black text-white`}
			>
				<FooterAcordeon key={'a'} />
				{footerInfo &&
					footerInfo.length > 0 &&
					footerInfo.map((j, i) => (
						<FooterInfo
							key={i}
							header={'Header'}
							items={
								Array.isArray(j)
									? j
									: []
							}
							className="flex flex-col self-center justify-self-center justify-items-end pr-8 items-start"
						/>
					))}
			</footer>
		</div>
	);
}
