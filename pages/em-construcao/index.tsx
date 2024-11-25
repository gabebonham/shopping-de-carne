import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function inDevelopmentPage() {
	return (
		<div>
			<Card className="items-centers">
				<CardContent className="items-center">
					<CardHeader className="items-center">
						<CardTitle>
							Shopping De Carne
						</CardTitle>
					</CardHeader>
					<CardDescription className="self-center text-center">
						Se está vendo esta página, esta
						parte do site está além da
						demonstração, e poderá ser
						implementada mediante a
						negociações.
					</CardDescription>
				</CardContent>
			</Card>
		</div>
	);
}
