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

export default function MenuBar({ items }: { items: MenuNavItem[] }) {
	return (
		<Menubar
			className={`flex flex-row rounded-none p-0 outline-none bg-white`}
		>
			{items.map((i) => (
				<MenubarMenu key={i.id}>
					<MenubarTrigger className="justify-center text-xs w-full">
						{i.title}
					</MenubarTrigger>
					<MenubarContent
						align="center"
						className="w-96"
					>
						{i.subItems.map((s) => (
							<div
								key={s}
								className="justify-center items-center text-center self-stretch"
							>
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
