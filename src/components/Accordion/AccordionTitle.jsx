import { useAccordionContext } from './Accordion';

function AccordionTitle({ id, children, className }) {
  const { toggleItem } = useAccordionContext();

  return (
    <h3
      onClick={() => toggleItem(id)}
      className={className}>
      {children}
    </h3>
  );
}

export default AccordionTitle;
