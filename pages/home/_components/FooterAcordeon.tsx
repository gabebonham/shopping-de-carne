import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export default function FooterAcordeon() {
	return (
		<Accordion
			type="single"
			collapsible
			className="flex flex-col place-self-start items-start justify-self-center"
		>
			<AccordionItem
				value="item-1"
				className="inline-block text-sm"
			>
				<AccordionTrigger>Quem somos?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design
					pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem
				value="item-2"
				className="inline-block text-sm"
			>
				<AccordionTrigger>
					Onde estamos localizados?
				</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that
					matches the other components&apos;
					aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem
				value="item-3"
				className="inline-block text-sm"
			>
				<AccordionTrigger>
					Estamos operando des de quando?
				</AccordionTrigger>
				<AccordionContent>
					Yes. It's animated by default, but you
					can disable it if you prefer.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
