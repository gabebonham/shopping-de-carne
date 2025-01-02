import Image from 'next/image';
import logo from '@/public/logoMeat.png';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import MenuBar from './MenuBar';
import FooterAcordeon from '@/app/home/_components/FooterAcordeon';
import FooterInfo from './FooterInfo';
import { AlignJustify, BaggageClaim, Book } from 'lucide-react';
import ComboboxDemo from './ComboBox';
import Branch from '@/model/BranchModel';
import { getBranches } from '@/app/admin/home/_service/CompanyService';
import LoginButton from './LoginButton';
import MenuNavItem from '@/model/MenuNavItem';
import CarComponent from './CarComponent';
import ItemsHistoryBodyComponent from './ItemsHistoryComponent';
import ItemsHistoryComponent from './ItemsHistoryComponent';
import EditSiteComponent from './EditSiteComponent';
import MbMenuComponent from '../_componentss/MbMenuComponent';
type ContactType = {
	id: number;
	title: string;
	link: string;
};
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
		{ id: 1, title: 'Contate-nos', link: '/em-construcao' },
		{ id: 2, title: 'Minha conta', link: '/em-construcao' },
		{ id: 3, title: 'Sobre nós', link: '/em-construcao' },
	] as ContactType[];

	const manufacturerInfo = [
		{ id: 4, title: 'Contate-nos', link: '/em-construcao' },
		{ id: 5, title: 'Minha conta', link: '/em-construcao' },
		{ id: 6, title: 'Sobre nós', link: '/em-construcao' },
	] as ContactType[];

	const footerInfo = [
		{ id: 1, value: manufacturerInfo },
		{ id: 2, value: contactInfo },
	];

	return (
		<div
			id="parentOfEditComponent"
			className=" bg-[rgba(60,60,60,0.5)] w-fit"
		>
			<header className="sticky top-0 z-50 w-auto shadow-lg bg-[rgba(10,10,10,0.5)]">
				<div className="smax:hidden h-28 py-2 px-8 flex items-center justify-between">
					<Image
						alt="logo"
						src={logo}
						className="size-24"
					/>
					<MbMenuComponent />
				</div>
				<div className="smin:max-smax:hidden py-2 px-8 h-28 flex flex-row">
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
			<div className="w-screen">
				{children}
				<EditSiteComponent />
			</div>

			<footer
				className={`grid smin:max-max:grid-cols-${
					footerInfo.length + 1
				} smin:max-smax:grid-rows-1 bg-black text-white `}
			>
				<FooterAcordeon key={'a'} />
				<div className="flex justify-center gap-12 pt-4">
					{footerInfo &&
						footerInfo.length > 0 &&
						footerInfo.map((j) => (
							<FooterInfo
								key={j.id}
								header={
									'Header'
								}
								items={
									Array.isArray(
										j.value,
									)
										? j.value
										: []
								}
								className=""
							/>
						))}
				</div>
			</footer>
		</div>
	);
}
