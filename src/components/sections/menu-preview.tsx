import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: "The Witch's Roll",
    description: "Quarter pound of fresh lobster meat, warm butter, brioche bun, chives.",
    price: "$32",
    image: "/images/dish-1.jpg",
    tag: "Signature"
  },
  {
    id: 2,
    name: "Salem Sound Oysters",
    description: "Half dozen local oysters, mignonette, cocktail sauce, lemon.",
    price: "$24",
    image: "/images/dish-2.jpg",
    tag: "Raw Bar"
  },
  {
    id: 3,
    name: "Midnight Chowder",
    description: "Creamy clam chowder with bacon, potatoes, and a splash of dark rum.",
    price: "$14",
    image: "/images/dish-3.jpg",
    tag: "Classic"
  },
  {
    id: 4,
    name: "Fisherman's Platter",
    description: "Fried haddock, shrimp, scallops, whole clams, coleslaw, tartar.",
    price: "$38",
    image: "/images/dish-4.jpg",
    tag: "Feast"
  }
];

export function MenuPreview() {
  return (
    <section className="py-24 bg-background border-t border-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Curated from the <span className="text-primary italic">Deep</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our menu changes with the tides. Here are a few favorites that never leave the chalkboard.
            </p>
          </div>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 gap-2">
            Full Menu <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item) => (
            <Card key={item.id} className="group overflow-hidden bg-card border-primary/20 hover:border-primary/50 transition-colors duration-300 rounded-lg">
              <div className="p-0">
                <AspectRatio ratio={4 / 3} className="overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Rustic Border Effect */}
                  <div className="absolute inset-0 border-[8px] border-background/10 pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-background/80 text-foreground backdrop-blur-sm border-primary/20 hover:bg-background">
                      {item.tag}
                    </Badge>
                  </div>
                </AspectRatio>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-mono text-primary font-medium">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuPreview;
