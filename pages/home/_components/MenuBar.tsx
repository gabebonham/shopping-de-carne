import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from '@/components/ui/menubar';
import MenuNavItem from '@/model/MenuNavItem';
import Link from 'next/link';

export default function MenuBar({ items = [] }: { items: MenuNavItem[] }) {
	const gridCols = items.length;
	return (
		<Menubar className={`flex flex-row rounded-none `}>
			{items.map((i) => (
				<MenubarMenu>
					<MenubarTrigger className="justify-center text-xs w-full">
						{i.title}
					</MenubarTrigger>
					<MenubarContent
						align="center"
						className="w-96"
					>
						{i.subItems.map((s) => (
							<div className="justify-center items-center text-center self-stretch">
								<MenubarItem className="self-center self-stretch items-center">
									<Link
										href={
											i.link
										}
										className="w-full self-center items-center text-center self-stretch"
									>
										{
											s
										}
									</Link>
								</MenubarItem>
								<MenubarSeparator />
							</div>
						))}
					</MenubarContent>
				</MenubarMenu>
			))}
		</Menubar>
	);
}
