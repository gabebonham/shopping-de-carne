'use client';

import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@radix-ui/react-scroll-area';

export default function ItemsHistoryBodyComponent({ items }: { items: any[] }) {
	return (
		<ScrollArea className="h-72 w-48 rounded-md border">
			<div className="p-4">
				<h4 className="mb-4 text-sm font-medium leading-none">
					Produtos
				</h4>
				{items.map((item) => (
					<div
						key={`${item.name}-${item.price}`}
						className="text-sm"
					>
						{item.name}: R${item.price}
						<Separator className="my-2" />
					</div>
				))}
			</div>
		</ScrollArea>
	);
}
