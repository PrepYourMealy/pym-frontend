import {Menu, type MenuDay} from "~/server/domain/types";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@radix-ui/react-accordion";

interface Props {
    day: string;
    menu: MenuDay;
}

const createAccordionItem = (menu: Menu) => {
    return (
        <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">
                {menu.name}
            </AccordionTrigger>
            <AccordionContent>
                <div className="grid gap-2 py-2">
                    <div>
                        <h5 className="mb-1 text-base font-medium">Zutaten:</h5>
                        <ul className="list-disc space-y-1 pl-4">
                            {menu.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5 className="mb-1 text-base font-medium">Zubereitung:</h5>
                        <ol className="list-decimal space-y-1 pl-4">
                            {menu.steps.map((step, index) => (
                                <li key={index}>{step.description}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>);
}

export const MenuDayView = ({day, menu}: Props) => {
    return (
        <Card className="rounded">
            <CardHeader className="bg-slate-300">
                <CardTitle className="text-xl">{day}</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {menu.breakfast && createAccordionItem(menu.breakfast)}
                    {menu.lunch && createAccordionItem(menu.lunch)}
                    {menu.dinner && createAccordionItem(menu.dinner)}
                </Accordion>
            </CardContent>
        </Card>
    );
};
