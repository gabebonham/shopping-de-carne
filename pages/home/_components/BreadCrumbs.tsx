import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import BreadCrumbItem from '@/model/BreadCrumbItem';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({
	items = [],
}: {
	items: BreadCrumbItem[];
}) {
	return (
		<Breadcrumb className="pt-12 pl-12">
			<BreadcrumbList key="a">
				{items.map((p, i) => (
					<BreadcrumbItem key={i}>
						<BreadcrumbLink href={p.link}>
							{p.name}
						</BreadcrumbLink>
						<ChevronRight />
					</BreadcrumbItem>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
