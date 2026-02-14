import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Anchor, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Anchor className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-bold text-foreground">
                Witch City Crustacean
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Authentic Salem seafood. <br />
              Sustainable. Fresh. Historic.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#heritage" className="text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#tracker" className="text-muted-foreground hover:text-primary transition-colors">Harbor Tracker</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Private Events</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-6">Visit Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>144 Derby Street</li>
              <li>Salem, MA 01970</li>
              <li className="pt-2">
                <a href="tel:9785550123" className="hover:text-primary transition-colors">(978) 555-0123</a>
              </li>
              <li>
                <a href="mailto:ahoy@crustacean.com" className="hover:text-primary transition-colors">ahoy@crustacean.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-6">The Daily Catch</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get daily updates on what's fresh at the docks.
            </p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-card border-primary/20 focus-visible:ring-primary text-foreground"
              />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 Witch City Crustacean. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
