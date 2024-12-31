'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function EditSiteComponent() {
	const [isBackground, setBackground] = useState(true);
	const [isLayout, setLayout] = useState(true);
	const changeBackground = () => {
		if (isBackground) {
			document.body.classList.remove('bg-back3');
			document.body.classList.add('bg-back');
		} else {
			document.body.classList.remove('bg-back');
			document.body.classList.add('bg-back3');
		}
		setBackground(!isBackground);
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
