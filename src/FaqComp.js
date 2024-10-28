import React, { useState } from "react";
import "./Faqcom.css";

const FaqComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for accordion
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      className="faq-section py-20 md:pb-20 sm:pb-10 pb-3"
      id="faq-section"
    >
      <div className="text-center">
        <h3 className="faq-subtitle">FAQ'S</h3>
        <h2 className="faq-title">Frequently Asked Questions</h2>
      </div>
      <div className="accordion-container mt-20">
        <AccordionItem
          index={1}
          title="How can a VIN history report help buyers?"
          content="A VIN history report provides detailed insights into a vehicle’s past, such as accidents, title issues, and maintenance history, helping buyers make informed decisions."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={2}
          title="How does a VIN history report help with financing or insurance?"
          content="Lenders and insurers may request a Vehicle History Report to assess risks and determine eligibility for financing or coverage based on the vehicle’s history."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={3}
          title="Can I use a Vehicle History Report to check for active recalls?"
          content="Yes, the report lists any unresolved safety recalls, so the vehicle can be repaired by the manufacturer before purchase or use."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={4}
          title="How often should I pull a VIN history report?"
          content="We recommend pulling a Vehicle History Report every time you buy, sell, or finance a used vehicle to verify its condition and ownership."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={5}
          title="Is it safe to share my VIN when selling a car?"
          content="Yes, providing the VIN is necessary for buyers to verify the vehicle’s history. It ensures transparency and helps build trust with potential buyers."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={6}
          title="Can I check Vehicle History Reports for vehicles outside the US?"
          content="Yes, some Vehicle History Reports cover vehicles registered in Canada, Europe, and other regions, depending on the report provider."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </section>
  );
};

// Accordion Item Component
const AccordionItem = ({
  index,
  title,
  content,
  activeIndex,
  toggleAccordion,
}) => (
  <div className="accordion-item">
    <h2
      className={`accordion-title ${activeIndex === index ? "active" : ""}`}
      onClick={() => toggleAccordion(index)}
      role="tab"
      aria-expanded={activeIndex === index}
      aria-controls={`panel-${index}`}
    >
      <span
        className={`accordion-icon ${activeIndex === index ? "rotate" : ""}`}
      >
        ▶
      </span>
      {title}
    </h2>
    <div
      id={`panel-${index}`}
      className={`accordion-content ${activeIndex === index ? "open" : ""}`}
      role="tabpanel"
    >
      <p>{content}</p>
    </div>
  </div>
);

export default FaqComp;
