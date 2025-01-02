'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { AlignJustify } from 'lucide-react';

export default function MbMenuComponent() {
	return (
		<Dialog>
			<DialogTrigger>
				<AlignJustify />
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader className="">
					<DialogTitle className="">
						asdf
					</DialogTitle>
					<DialogDescription className="">
						<Button>asd</Button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
