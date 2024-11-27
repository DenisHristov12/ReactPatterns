import { useAccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

function AccordionTitle({ children, className }) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();

  return (
    <h3
      id={id}
      onClick={() => toggleItem(id)}
      className={className}>
      {children}
    </h3>
  );
}

export default AccordionTitle;
