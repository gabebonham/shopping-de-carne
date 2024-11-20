import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { MenuNavItem } from '@/model/MenuNavItem';

export default function TableComponent({
	menuItems,
	deleteFun,
}: {
	menuItems: MenuNavItem[];
	deleteFun: Function;
}) {
	const items = menuItems.map(
		(i) => new MenuNavItem(i.id, i.title, i.link, i.subItems),
	);
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">
						Item
					</TableHead>
					<TableHead>Link</TableHead>
					<TableHead>Sub Items</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{items.map((item: MenuNavItem) => (
					<TableRow key={item.title}>
						<TableCell className="font-medium">
							{item.title}
						</TableCell>
						<TableCell>
							{item.link}
						</TableCell>
						<TableCell>
							{item.subItemsToString()}
						</TableCell>
						<TableCell className="items-end col-span-4">
							<Button
								onClick={(e) =>
									deleteFun(
										item.id,
									)
								}
								variant={
									'destructive'
								}
							>
								Remover Item
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}></TableCell>
					<TableCell className="text-right"></TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
