'use client';

import { useState } from 'react';
import HomeSection from '../_components/HomeSection';
import FilterMenu from '../_components/FilterMenu';
import { CategoryEnum } from '@/app/_enums/Enums';
import { ItemDto } from '@/model/ItemDto';

export default function DisplayProductsComponent({
	items,
	header,
}: {
	items: any[];
	header: string;
}) {
	let [categoriesToShow, setCategoriesToShow] = useState<string[]>([]);

	const [flag, setFlag] = useState(false);
	return (
		<div className="grid grid-cols-3 grid-rows-1 grid-flow-col auto-cols-max px-24 my-8">
			<div className="place-items-center col-span-1">
				<FilterMenu
					categoriesToShow={categoriesToShow}
					setCategoriesToShow={
						setCategoriesToShow
					}
					setFlag={setFlag}
					flag={flag}
				/>
			</div>
			<div className="col-span-2">
				<HomeSection
					header={header}
					flag={flag}
					categoriesToShow={categoriesToShow}
					className=""
					items={items}
				/>
			</div>
		</div>
	);
}
