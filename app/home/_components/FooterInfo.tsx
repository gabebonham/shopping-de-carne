import Link from 'next/link';

export default function FooterInfo({
	header,
	items = [],
	className,
}: {
	header: string;
	items: any[];
	className: string;
}) {
	return (
		<div className=" flex flex-col ">
			<h1 className="text-bold text-lg">{header}</h1>
			<div className="">
				{items.map((i) => (
					<div key={i.id} className="">
						<Link
							key={i.title}
							className="text-sm"
							href={i.link}
						>
							{i.title}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
