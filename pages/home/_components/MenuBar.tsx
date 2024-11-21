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

export default function MenuBar({ items = [] }: { items: MenuNavItem[] }) {
	const gridCols = items.length;
	return (
		<Menubar className={`flex flex-row rounded-none `}>
			{items.map((i) => (
				<MenubarMenu>
					<MenubarTrigger className="justify-center text-xs w-full">
						{i.title}
					</MenubarTrigger>
					{i.subItems.map((s) => (
						<MenubarContent
							align="center"
							className="w-96"
						>
							<MenubarCheckboxItem>
								Always Show
								Bookmarks Bar
							</MenubarCheckboxItem>
							<MenubarCheckboxItem
								checked
							>
								Always Show Full
								URLs
							</MenubarCheckboxItem>
							<MenubarSeparator />
							<MenubarItem inset>
								Reload{' '}
								<MenubarShortcut>
									⌘R
								</MenubarShortcut>
							</MenubarItem>
							<MenubarItem
								disabled
								inset
							>
								Force Reload{' '}
								<MenubarShortcut>
									⇧⌘R
								</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem inset>
								Toggle
								Fullscreen
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem inset>
								Hide Sidebar
							</MenubarItem>
						</MenubarContent>
					))}
				</MenubarMenu>
			))}
		</Menubar>
	);
}
