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
			className="flex flex-col place-self-start items-start justify-self-center smin:max-smax:items-center"
		>
			<AccordionItem
				value="item-1"
				className="inline-block text-sm"
			>
				<AccordionTrigger>Quem somos?</AccordionTrigger>
				<AccordionContent>Lorem Ipsum</AccordionContent>
			</AccordionItem>
			<AccordionItem
				value="item-2"
				className="inline-block text-sm"
			>
				<AccordionTrigger>
					Onde estamos localizados?
				</AccordionTrigger>
				<AccordionContent>Lorem Ipsum</AccordionContent>
			</AccordionItem>
			<AccordionItem
				value="item-3"
				className="inline-block text-sm"
			>
				<AccordionTrigger>
					Estamos operando des de quando?
				</AccordionTrigger>
				<AccordionContent>Lorem Ipsum</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
