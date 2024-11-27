import { useAccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

function AccordionContent({ children, className }) {
  const { openItemId } = useAccordionContext();

  const id = useAccordionItemContext();

  const isOpen = openItemId === id;

  return (
    <div
      id={id}
      className={
        isOpen ? `${className ?? ''} open` : `${className ?? ''} close`
      }>
      {children}
    </div>
  );
}

export default AccordionContent;
