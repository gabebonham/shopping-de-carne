import { MenuNavItem } from '@/model/MenuNavItem';

async function getNavItems(): Promise<MenuNavItem[]> {
	const j = (await (
		await fetch(
			'https://670878788e86a8d9e42f006d.mockapi.io/api/data',
		)
	).json()) as MenuNavItem[];
	return j;
}
async function createNavItem(item) {
	await fetch('https://670878788e86a8d9e42f006d.mockapi.io/api/data', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(item),
	});
}
async function deleteNavItem(id) {
	await fetch(
		'https://670878788e86a8d9e42f006d.mockapi.io/api/data/' + id,
		{
			method: 'DELETE',
		},
	);
}

export { getNavItems, createNavItem, deleteNavItem };
