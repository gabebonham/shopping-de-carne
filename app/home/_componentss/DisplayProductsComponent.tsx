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
	showFilter,
}: {
	items: any[];
	header: string;
	showFilter: boolean;
}) {
	let [categoriesToShow, setCategoriesToShow] = useState<string[]>([]);
	const [flag, setFlag] = useState(false);
	return (
		<div
			className={
				'smax:grid  smax:grid-rows-1 smax:grid-flow-col smax:auto-cols-max  smax:my-8 ' +
				(showFilter
					? ' smax:grid-cols-3 smax:px-24 '
					: ' smax:grid-cols-5 ')
			}
		>
			{showFilter ? (
				<div className="smin:max-smax:hidden  place-items-center col-span-1">
					<FilterMenu
						categoriesToShow={
							categoriesToShow
						}
						setCategoriesToShow={
							setCategoriesToShow
						}
						setFlag={setFlag}
						flag={flag}
					/>
				</div>
			) : (
				<div></div>
			)}

			<div className="smax:col-span-3">
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
			{!showFilter && <div className=""></div>}
		</div>
	);
}
