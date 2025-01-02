'use client';

import { useState } from 'react';
import HomeSection from '../_components/HomeSection';
import FilterMenu from '../_components/FilterMenu';
import { CategoryEnum } from '@/app/_enums/Enums';
import { ItemDto } from '@/model/ItemDto';
import { Button } from '@/components/ui/button';
import FilterPopUpComponent from './FilterPopUpComponent';

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
		<div className="smax:grid smax:grid-cols-3 smax:grid-rows-1 smax:grid-flow-col smax:auto-cols-max smax:px-24 smax:my-8">
			<div className="smin:max-smax:hidden  place-items-center col-span-1">
				<FilterMenu
					categoriesToShow={categoriesToShow}
					setCategoriesToShow={
						setCategoriesToShow
					}
					setFlag={setFlag}
					flag={flag}
				/>
			</div>

			<div className="smax:col-span-2">
				<HomeSection
					header={header}
					flag={flag}
					categoriesToShow={categoriesToShow}
					className=""
					items={items}
					setCategoriesToShow={
						setCategoriesToShow
					}
					setFlag={setFlag}
				/>
			</div>
		</div>
	);
}
