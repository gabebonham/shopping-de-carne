'use client';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { AlignJustify } from 'lucide-react';
import FilterMenu from '../_components/FilterMenu';

export default function FilterPopUpComponent({
	setCategoriesToShow,
	categoriesToShow,
	setFlag,
	flag,
}: {
	setCategoriesToShow: (list: string[]) => void;
	categoriesToShow: Array<string>;
	setFlag: (value: boolean) => void;
	flag: boolean;
}) {
	return (
		<Dialog>
			<DialogTrigger className="smax:hidden flex justify-self-center bg-white text-black underline">
				Filtrar Por
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader className="">
					<DialogTitle className=""></DialogTitle>
					<DialogDescription className="">
						<FilterMenu
							categoriesToShow={
								categoriesToShow
							}
							flag={flag}
							setCategoriesToShow={
								setCategoriesToShow
							}
							setFlag={setFlag}
						/>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
