import React from 'react';
import {
  Body,
  BodyContent,
  Container,
  Frame,
  Header,
  HeaderIcon,
  Inner,
  Item,
  Title,
} from './styles/Accordion';

const AccordionContext = React.createContext();
const ItemContext = React.createContext();

const Accordion = ({ children, ...props }) => {
  return (
    <Container>
      <Inner {...props}>{children}</Inner>
    </Container>
  );
};

const AccordionTitle = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};
Accordion.Title = AccordionTitle;

const AccordionFrame = ({ children, ...props }) => {
  const [activeItemIndex, setActiveItemIndex] = React.useState(null);
  return (
    <AccordionContext.Provider value={{ activeItemIndex, setActiveItemIndex }}>
      <Frame {...props}>{children}</Frame>
    </AccordionContext.Provider>
  );
};
Accordion.Frame = AccordionFrame;

const AccordionItem = ({ index, children, ...props }) => {
  const { activeItemIndex } = React.useContext(AccordionContext);
  const isActive = index === activeItemIndex;
  return (
    <ItemContext.Provider value={{ isActive, index }}>
      <Item {...props}>{children}</Item>
    </ItemContext.Provider>
  );
};
Accordion.Item = AccordionItem;

const AccordionHeader = ({ children, ...props }) => {
  const { setActiveItemIndex } = React.useContext(AccordionContext);
  const { index, isActive } = React.useContext(ItemContext);

  function handleClick() {
    setActiveItemIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <Header aria-expanded={isActive} onClick={handleClick} $isActive={isActive} {...props}>
      {children}
      <HeaderIcon $isActive={isActive} />
    </Header>
  );
};
Accordion.Header = AccordionHeader;

const AccordionBody = ({ children, ...props }) => {
  const { index, isActive } = React.useContext(ItemContext);
  const bodyRef = React.useRef();
  const accessibilityProps = {
    id: `answer${index}`,
    'aria-labelledby': `question${index}`,
  };
  return (
    <Body {...accessibilityProps} ref={bodyRef} $isActive={isActive} {...props}>
      <BodyContent>{children}</BodyContent>
    </Body>
  );
};
Accordion.Body = AccordionBody;

export default Accordion;
