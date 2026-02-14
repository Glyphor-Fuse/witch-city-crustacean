import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HISTORY_FACTS = [
  {
    id: "item-1",
    year: "1924",
    title: "The Founding",
    content: "Captain Jeremiah Thorne docked his schooner for the last time and opened a small shack on Derby Wharf, serving hot chowder to freezing dockworkers."
  },
  {
    id: "item-2",
    year: "1955",
    title: "The Great Storm",
    content: "Hurricane Diane battered the coast, but the Crustacean stood firm. It became a shelter for 40 stranded fishermen, cementing its place in local lore."
  },
  {
    id: "item-3",
    year: "Present Day",
    title: "A Living Legacy",
    content: "Today, the fourth generation of Thornes runs the kitchen, maintaining the same recipes and commitment to sustainable, line-caught seafood."
  }
];

export function Heritage() {
  return (
    <section id="heritage" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Anchored in <span className="text-primary">History</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Salem isn't just about witches; it's about the sea. For over a century, our family has lived and breathed the salt air of these wharfs. We honor that legacy in every plate we serve.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              {HISTORY_FACTS.map((fact) => (
                <AccordionItem key={fact.id} value={fact.id} className="border-primary/20">
                  <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline text-lg font-serif">
                    <span className="font-mono text-primary text-sm mr-4 opacity-70">{fact.year}</span>
                    {fact.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {fact.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative group">
            <div className="aspect-[3/4] md:aspect-square relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="/images/heritage-old-wharf.jpg" 
                alt="Vintage photo of Salem Wharf c. 1920" 
                className="w-full h-full object-cover filter sepia-[0.3] contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              {/* Grain Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>
            {/* Decorative Frame Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-primary/40 rounded-br-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-primary/40 rounded-tl-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Heritage;
