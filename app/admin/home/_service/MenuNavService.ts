'use server';
import MenuNavItem from '@/model/MenuNavItem';
import { revalidatePath } from 'next/cache';

async function getNavItems(): Promise<MenuNavItem[]> {
	const items = (await fetch(
		'https://670878788e86a8d9e42f006d.mockapi.io/api/data',
	).then((r) => r.json())) as MenuNavItem[];
	items.forEach((i) => (i.subItems = ['subItem1', 'subItem2']));
	return items;
}
async function createNavItem(item: MenuNavItem) {
	console.log(item);
	await fetch('https://670878788e86a8d9e42f006d.mockapi.io/api/data', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(item),
	});
	return revalidatePath('/admin/home', 'page');
}
async function deleteNavItem(id) {
	await fetch(
		'https://670878788e86a8d9e42f006d.mockapi.io/api/data/' + id,
		{
			method: 'DELETE',
		},
	);
	revalidatePath('/admin/home', 'page');
}

export { getNavItems, createNavItem, deleteNavItem };
