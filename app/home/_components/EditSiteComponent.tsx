'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function EditSiteComponent() {
	const backList = ['bg-back1', 'bg-back2', 'bg-back3', 'bg-back4'];
	const [counter, count] = useState(0);
	const [isLayout, setLayout] = useState(true);
	const [trigger, toggle] = useState(false);
	const [flag, setFlag] = useState(false);
	useEffect(() => {
		const handler = async () => {
			changeBackground();
		};
		handler();
	}, [trigger]);
	const changeBackground = async () => {
		if (flag) {
			await document.body.classList.remove(backList[counter]);
			if (counter == 3) {
				await document.body.classList.add(backList[0]);
			} else {
				await document.body.classList.add(
					backList[counter + 1],
				);
			}
			if (counter == 3) {
				count(0);
			} else {
				count(counter + 1);
			}
		}

		setFlag(true);
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
		<div className="smin:max-smax:hidden flex fixed bottom-0 right-0 z-100 shadow-lg rounded-2xl bg-[rgba(150,40,40,0.2)] w-fit m-2 p-4">
			<Button
				onClick={(e) => {
					toggle(!trigger);
					changeBackground;
				}}
			>
				Mudar Background
			</Button>
			<Button className="ml-4" onClick={changeLayout}>
				Mudar Layout Da Home
			</Button>
		</div>
	);
}
