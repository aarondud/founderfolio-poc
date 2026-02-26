import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CONTENT, FAQ_DATA } from "@/lib/constants";
import { SECTION_IDS } from "@/lib/sections";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { Tag } from "../ui/tag";
import { CircleHelp } from "lucide-react";

const FAQ: React.FC = () => {
  const { sectionRef } = useSectionAnimation();

  return (
    <section id={SECTION_IDS.FAQ} ref={sectionRef} className="container-section slide-up">
      {/* Divider line */}
      <div
        className="w-full border-t border-primary mb-12"
        style={{ borderWidth: "1.5px" }}
      />
      <Tag icon={CircleHelp} text={CONTENT.faq.tag} />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          {/* Left column: header and underline */}
          <div className="md:w-1/4 mb-8 md:mb-0 sm:text-center md:text-left ">
            <h2 className="section-title">{CONTENT.faq.header}</h2>
            <p className="text-lg">{CONTENT.faq.sub}</p>
          </div>
          {/* Right column: Accordions */}
          <div className="md:w-3/4 w-full">
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ_DATA.map((item) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  bgClass="bg-transparent"
                  borderClass="border border-transparent data-[state=open]:border-primary"
                  className="rounded-lg text-md transition-all duration-300"
                >
                  <AccordionTrigger
                    className="px-6 text-md font-semibold rounded-lg text-left md:text-left"
                    bgClass="bg-card"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-3 text-md text-muted-foreground bg-transparent text-left md:text-left rounded-b-lg">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
