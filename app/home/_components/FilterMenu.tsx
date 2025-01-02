'use client';
import { CategoryEnum } from '@/app/_enums/Enums';
import { Checkbox } from '@/components/ui/checkbox';
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
import Item from '@/model/Item';
import { cacheTag } from 'next/dist/server/use-cache/cache-tag';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { ItemDto } from '../../../model/ItemDto';
import { strictEqual } from 'assert';
import { stringify } from 'querystring';

export default function FilterMenu({
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
	const handler = (category: string, isChecked: boolean) => {
		if (isChecked) {
			const newCategoryList =
				categoriesToShow.concat(category);

			setCategoriesToShow(newCategoryList);
		} else {
			const newCategoryList = categoriesToShow.filter(
				(c) => c !== category,
			);
			console.log(newCategoryList);
			setCategoriesToShow(newCategoryList);
		}
		setFlag(!flag);
		console.log(categoriesToShow);
	};

	return (
		<Menubar className="grid grid-cols-2 rounded-lx justify-items-start bg-red-50 h-auto pr-4">
			{Object.values(CategoryEnum).map((item) => (
				<MenubarMenu key={item.valueOf()}>
					<MenubarTrigger className="w-full p-8">
						<label
							htmlFor={item.valueOf()}
							className=""
						>
							{item.valueOf()}
						</label>
					</MenubarTrigger>
					<Checkbox
						className="justify-self-end"
						id={item.valueOf()}
						onCheckedChange={(e) =>
							handler(
								item.valueOf(),
								e.valueOf() as boolean,
							)
						}
						checked={categoriesToShow.includes(
							item,
						)}
					/>
				</MenubarMenu>
			))}
		</Menubar>
	);
}
