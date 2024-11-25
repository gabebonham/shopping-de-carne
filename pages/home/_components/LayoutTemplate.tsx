import Image from 'next/image';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import MenuBar from './MenuBar';
import FooterAcordeon from '@/pages/home/_components/FooterAcordeon';
import FooterInfo from './FooterInfo';
import { BaggageClaim, Book } from 'lucide-react';
import ComboboxDemo from './ComboBox';
import Branch from '@/model/BranchModel';
import { getBranches } from '@/app/admin/home/_service/CompanyService';
import LoginButton from './LoginButton';
import MenuNavItem from '@/model/MenuNavItem';

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
			<header className="sticky top-0 z-50 shadow-lg bg-red-500">
				<div className="py-2 px-8 h-24 flex flex-row">
					<h1 className="self-center text-center mr-4">
						Shopping De Carne
					</h1>
					<Input
						placeholder="Pesquisa..."
						className="w-6/12 self-center drop-shadow-md"
					/>
					<button className="flex text-xs w-auto mt-8 px-4">
						<span className="flex w-36">
							<Book className="size-4" />{' '}
							Histórico de Compras
						</span>
					</button>
					<button className="flex text-xs w-auto mt-8 pl-2 pr-4">
						<span className="flex w-36">
							<BaggageClaim className="size-4" />
							Carrinho
						</span>
					</button>
					<ComboboxDemo branches={newBranches} />
					<LoginButton className="flex self-center shadow-lg bg-black text-white" />
				</div>
				<MenuBar items={items} />
			</header>
			{children}
			<footer
				className={`grid grid-cols-${
					footerInfo.length + 1
				} grid-rows-1 bg-red-500`}
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
