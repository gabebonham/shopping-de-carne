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
import ItemDto from '../../../model/ItemDto';
import { strictEqual } from 'assert';
import { stringify } from 'querystring';

export default function FilterMenu({
	bol,
	fun2,
	fun,
	lista = [],
	listLength,
}: {
	bol: Function;
	fun2: Function;
	lista: Array<string>;
	listLength: number;
	fun: Function;
}) {
	const handler = (item: string) => {
		if (!lista.includes(item)) {
			fun2((e) => e.concat(item));
		} else {
			const newCategoryList = lista.filter((i) => i != item);
			fun2(newCategoryList);
		}
	};
	useEffect(() => {
		fun((prev) => {
			const newList = prev.map((i) => {
				if (lista.length != listLength) {
					if (lista.includes(i.item.category)) {
						i.show = false;
						return i;
					} else {
						i.show = true;
						return i;
					}
				} else {
					i.show = true;
					return i;
				}
			});
			return newList;
		});

		bol((e) => !e);
	}, [lista]);

	return (
		<Menubar className="grid grid-cols-2 rounded-none justify-items-start bg-red-50 h-auto w-fullp-4">
			{Object.values(CategoryEnum).map((item) => (
				<MenubarMenu key={item}>
					<MenubarTrigger className="w-full p-8">
						<label
							htmlFor={item}
							className=""
						>
							{item}
						</label>
					</MenubarTrigger>
					<Checkbox
						className="justify-self-end"
						id={item}
						onClick={(e) => handler(item)}
					/>
				</MenubarMenu>
			))}
		</Menubar>
	);
}
