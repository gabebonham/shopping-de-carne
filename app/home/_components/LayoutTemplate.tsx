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
		<div>
			<header className="sticky top-0 z-50 shadow-lg bg-gradient-to-br from-teal-800 to-sky-100">
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
					<button className="flex text-xs w-auto mt-10 px-8">
						<ItemsHistoryComponent />
					</button>
					<button className="flex text-xs w-auto mt-10 pl-2 pr-4">
						<CarComponent />
					</button>
					<ComboboxDemo branches={newBranches} />
					<LoginButton className="flex self-center shadow-lg bg-black text-white" />
				</div>
				<MenuBar items={items} />
			</header>
			<div className="bg-gradient-to-br from-teal-800 to-gray-500 via-teal-100">
				{children}
			</div>

			<footer
				className={`grid grid-cols-${
					footerInfo.length + 1
				} grid-rows-1 bg-gradient-to-br from-teal-800 to-sky-100`}
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
