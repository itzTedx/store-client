import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <div className="col-span-2">
      <h4 className="font-glirock text-3xl">Most Frequent Questions</h4>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="no-underline">
            Is it possible to split two names in 500pieces?
          </AccordionTrigger>
          <AccordionContent>Answer Here</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="no-underline">
            How are standard business card printed?
          </AccordionTrigger>
          <AccordionContent>Answer Here</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="no-underline">
            Some Questions here?
          </AccordionTrigger>
          <AccordionContent>Answer Here</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="no-underline">
            Some Questions here?
          </AccordionTrigger>
          <AccordionContent>Answer Here</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
