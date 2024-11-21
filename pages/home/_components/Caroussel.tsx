import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import CarousselItem from '../../../model/CarousselItemModel';
import Image from 'next/image';

export default function CarouselPlugin({
	items = [],
}: {
	items: Array<CarousselItem>;
}) {
	const plugin = React.useRef(
		Autoplay({ delay: 10000, stopOnInteraction: false }),
	);

	return (
		<Carousel
			plugins={[plugin.current]}
			className="w-full max-w-full p-0 m-0"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{items.map((i, index) => (
					<CarouselItem key={index}>
						<div className=" p-0 m-0">
							<Card className="p-4 m-0">
								<CardContent className="flex h-48 items-center justify-center p-0 m-0">
									<Image
										alt="currentImage"
										width="600"
										height="300"
										src={
											'/' +
											i.imageUrl
										}
										className="rounded-lg w-full h-full"
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
