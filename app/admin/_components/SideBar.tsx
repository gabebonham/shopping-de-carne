import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { getSideBarItems } from '../../../lib/SideBarItems';

export default async function SideBar() {
	const sideBarItems = await getSideBarItems();

	return (
		<Sidebar side={'left'} variant="sidebar" collapsible="icon">
			<SidebarHeader />
			<SidebarContent>
				<SidebarGroup />
				<SidebarGroupLabel>Menu</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						{sideBarItems.map((item) => (
							<SidebarMenuItem
								key={item.title}
							>
								<SidebarMenuButton
									asChild
								>
									<a
										href={
											'/em-construcao'
										}
									>
										<item.icon />
										<span>
											{
												item.title
											}
										</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroupContent>
				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
