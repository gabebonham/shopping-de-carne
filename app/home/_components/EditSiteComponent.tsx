'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function EditSiteComponent() {
	const backList = [
		'bg-back3',
		'bg-back',
		'bg-back5',
		'bg-back6',
		'bg-back7',
	];
	const [isBackground, setBackground] = useState(backList[0]);
	const [counter, count] = useState(0);
	const [isLayout, setLayout] = useState(true);
	const changeBackground = () => {
		document.body.classList.remove(backList[counter]);
		if (counter == 4) {
			document.body.classList.add(backList[0]);
		} else {
			document.body.classList.add(backList[counter + 1]);
		}
		if (counter == 4) {
			count(0);
		} else {
			count(counter + 1);
		}
	};
	const changeLayout = () => {
		if (isLayout) {
			(
				document.getElementById(
					'homeDiv',
				) as HTMLElement
			).classList.remove('m-8');
			(
				document.getElementById(
					'homeDiv',
				) as HTMLElement
			).classList.remove('rounded-2xl');
		} else {
			(
				document.getElementById(
					'homeDiv',
				) as HTMLElement
			).classList.add('m-8');
			(
				document.getElementById(
					'homeDiv',
				) as HTMLElement
			).classList.add('rounded-2xl');
		}
		setLayout(!isLayout);
	};
	return (
		<div className="flex fixed bottom-0 right-0 z-100 shadow-lg rounded-2xl bg-[rgba(150,40,40,0.2)] w-fit m-2 p-4">
			<Button onClick={changeBackground}>
				Mudar Background
			</Button>
			<Button className="ml-4" onClick={changeLayout}>
				Mudar Layout Da Home
			</Button>
		</div>
	);
}
