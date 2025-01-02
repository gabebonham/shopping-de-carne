'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { AlignJustify, ShoppingBasket } from 'lucide-react';
import CarPopUp from './CarPopUp';

export default function MbMenuComponent() {
	return (
		<Dialog>
			<DialogTrigger>
				<AlignJustify />
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader className="">
					<DialogTitle className=""></DialogTitle>
					<DialogDescription className="flex flex-col mt-8 ">
						<CarPopUp />
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
