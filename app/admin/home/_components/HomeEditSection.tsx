'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MenuNavItem } from '@/model/MenuNavItem';
import { Checkbox } from '@radix-ui/react-checkbox';
import { Label } from '@radix-ui/react-menubar';
import { useEffect, useRef, useState } from 'react';
import { createNavItem, deleteNavItem } from '../_service/MenuNavService';
import Refresh from '../../_lib/Refresh';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import TableComponent from './TableComponent';

export default function HomeEditSection({ menuItems }) {
	const router = useRouter();
	const [itemId, setItemId] = useState();
	const [isError, setIsError] = useState(false);
	const nameInputRef = useRef<HTMLInputElement | null>(null);
	const linkInputRef = useRef<HTMLInputElement | null>(null);

	const deleteItem = async (id) => {
		setIsError(false);
		await deleteNavItem(id);
		router.refresh();
	};
	const handler1 = async () => {
		if (
			nameInputRef.current?.value &&
			linkInputRef.current?.value
		) {
			setIsError(false);
			const name = nameInputRef.current?.value as string;
			const link = linkInputRef.current?.value as string;
			const newItem = new MenuNavItem('', name, link, []);

			createNavItem(newItem);

			router.refresh();
		} else {
			setIsError(true);
		}
	};

	return (
		<div className="">
			<h1 className="pb-4 pl-4">Editar Menu de Navegação:</h1>
			<Card className="border rounded-lg">
				<CardFooter className="flex flex-col items-start p-4 ">
					<div className=" flex flex-row w-full p-0">
						{!isError ? (
							<h1 className="justify-self-start line-clamp-1 m-0">
								Adicionar Item:
							</h1>
						) : (
							<h1 className="self-start text-red-500">
								{' '}
								Preencha os
								campos. Link
								deve começar com
								"/".
							</h1>
						)}
						<div className="basis-6/12"></div>
						<Button
							className="justify-self-end"
							onClick={handler1}
						>
							Adicionar
						</Button>
					</div>
					<div>
						<Label>Titulo:</Label>
						<Input
							id="namea"
							key="nameb"
							ref={nameInputRef}
							type="text"
						/>
						<Label>Link:</Label>
						<Input
							id="linka"
							key="linkb"
							ref={linkInputRef}
							type="text"
						/>
					</div>
				</CardFooter>
			</Card>
			<TableComponent
				deleteFun={deleteItem}
				menuItems={menuItems}
			/>
		</div>
	);
}
