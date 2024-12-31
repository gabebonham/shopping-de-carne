'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	DetailedHTMLProps,
	FormEvent,
	FormHTMLAttributes,
	useState,
} from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import User from '@/model/UserModel';

export default function LoginButton({ className }: { className: string }) {
	const router = useRouter();
	const handler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const user = new FormData(e.currentTarget);
		const userName = (await user.get('userName')) as string;
		const password = (await user.get('password')) as string;
		if (userName.length != 0 && password.length != 0) {
			Cookies.set(
				'user',
				JSON.stringify({
					userName: userName,
					password: password,
					role: 'user',
				}),
			);
			router.push('/admin/home');
		}
	};
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					className={' ' + className}
					variant="outline"
				>
					Login
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="grid gap-4">
					<form
						className="grid gap-2"
						onSubmit={(e) => handler(e)}
					>
						<div className="grid grid-cols-3 items-center gap-4">
							<label htmlFor="userName">
								Usuário:
							</label>
							<Input
								id="userName"
								className="col-span-2 h-8"
								type="text"
								name="userName"
							/>
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<label htmlFor="password">
								Senha:
							</label>
							<Input
								id="password"
								className="col-span-2 h-8"
								type="password"
								name="password"
							/>
						</div>
						<Button type="submit">
							Autenticar
						</Button>
					</form>
				</div>
			</PopoverContent>
		</Popover>
	);
}
