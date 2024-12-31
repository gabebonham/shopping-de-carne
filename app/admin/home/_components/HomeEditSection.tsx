'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import MenuNavItem from '@/model/MenuNavItem';
import { Label } from '@radix-ui/react-menubar';
import { useRef, useState } from 'react';
import { createNavItem, deleteNavItem } from '../_service/MenuNavService';

export default function HomeEditSection() {
	const [isError, setIsError] = useState(false);
	const nameInputRef = useRef<any>(null);
	const linkInputRef = useRef<any>(null);

	const handler = async () => {
		if (
			nameInputRef.current?.value &&
			linkInputRef.current?.value
		) {
			setIsError(false);
			const name = nameInputRef.current?.value as string;
			const newItem = new MenuNavItem(
				'',
				name,
				'/em-construcao',
				[],
			);

			await createNavItem({
				id: '',
				title: name,
				link: '/em-construcao',
				subItems: [],
			});
		} else {
			setIsError(true);
		}
	};

	return (
		<div className="mt-8 w-full">
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
						<div className="w-7/12"></div>
						<Button
							className="self-end"
							onClick={handler}
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
		</div>
	);
}
