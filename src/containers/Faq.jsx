import React from 'react';
import { Accordion, OptForm } from '../components';
import faqData from '../fixtures/faq.json';

const FaqContainer = () => {
  return (
    <>
      <Accordion>
        <Accordion.Title>Perguntas frequentes</Accordion.Title>
        <Accordion.Frame>
          {faqData.map((item, index) => (
            <Accordion.Item index={index} key={item.id}>
              <h2>
                <Accordion.Header id={`question${index}`} aria-controls={`answer${index}`}>
                  {item.header}
                </Accordion.Header>
              </h2>
              <Accordion.Body id={`answer${index}`} aria-labelledby={`question${index}`}>
                {item.body}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    </>
  );
};

export default FaqContainer;
