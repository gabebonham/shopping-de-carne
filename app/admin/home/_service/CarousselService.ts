import CarousselItem from '@/model/CarousselItemModel';

async function getCarousselItems() {
	return [
		new CarousselItem('aa.jpg'),
		new CarousselItem('meat2.jpg'),
		new CarousselItem('meat3.jpg'),
	];
}

export { getCarousselItems };
