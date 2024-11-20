import { Card, CardContent, CardFooter } from '@/components/ui/card';
import SideBarComponent from '../_components/SideBarComponent';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import { useRef, useState } from 'react';
import { MenuNavItem } from '@/model/MenuNavItem';
import HomeEditSection from './_components/HomeEditSection';
import { link } from 'fs';
import { getNavItems } from './_service/MenuNavService';

export default async function AdminHome() {
	let menuItems = await getNavItems();
	return (
		<SideBarComponent>
			<HomeEditSection menuItems={menuItems} />
		</SideBarComponent>
	);
}
