import { Card, CardContent, CardFooter } from '@/components/ui/card';
import SideBarComponent from '../_components/SideBarComponent';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import { useRef, useState } from 'react';
import HomeEditSection from './_components/HomeEditSection';
import { getNavItems } from './_service/MenuNavService';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default async function AdminHome() {
	let menuItems = await getNavItems();
	return (
		<SideBarComponent>
			<Link
				href="/home"
				className="bg-blue-300 shadow rounded p-4 justify self-center"
			>
				Retornar para Home
			</Link>
			<Separator className="m-8" />
			<HomeEditSection menuItems={menuItems} />
		</SideBarComponent>
	);
}
