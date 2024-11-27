import { useAccordionContext } from './Accordion';

function AccordionItem({ className, children }) {
  return <li className={className}>{children}</li>;
}

export default AccordionItem;
