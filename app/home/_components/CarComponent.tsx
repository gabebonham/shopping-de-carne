'use client';
import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { BaggageClaim } from 'lucide-react';
import cookie from 'js-cookie';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function CarComponent() {
	const pathname = usePathname();
	console.log(pathname);
	const [currentItems, setCurrentItems] = useState(0);
	const handler = () => {
		const items = cookie.get('items') || 0;
		setCurrentItems(items);
	};
	const removeItems = () => {
		cookie.remove('items', { path: '/' });
		cookie.remove('itemsList', {
			path: '/',
		});
		setCurrentItems(0);
	};
	return (
		<Popover>
			<PopoverTrigger asChild>
				<span
					className="flex items-center"
					onClick={handler}
				>
					<BaggageClaim className="" />
					Carrinho
				</span>
			</PopoverTrigger>
			<PopoverContent className="p-8 justify-items-center">
				<div className="p-4 flex">
					Itens: {currentItems}
				</div>
				{currentItems !== 0 ? (
					<div className="p-4">
						<Button>Checkout</Button>
						<Button
							className="flex flex-col"
							onClick={removeItems}
						>
							Zerar Carrinho
						</Button>
					</div>
				) : (
					<div>Carrinho vazio.</div>
				)}
			</PopoverContent>
		</Popover>
	);
}
