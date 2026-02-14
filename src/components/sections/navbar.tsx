import { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Menu, X, Anchor } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Anchor className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            Witch City Crustacean
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-primary hover:bg-primary/10">Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                            Today's Catch
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Fresh off the boat daily at 11am.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none text-foreground">Lobster Rolls</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Classic New England style, hot or cold.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none text-foreground">Raw Bar</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Oysters, clams, and daily specials.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#heritage" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 text-foreground">
                  Heritage
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#tracker" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary outline-none disabled:pointer-events-none disabled:opacity-50 text-foreground">
                  Tracker
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif tracking-wide border border-primary/50 shadow-[0_0_15px_-5px_var(--primary)]">
            Order Online
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l-primary/20 w-[300px] sm:w-[400px]">
             <nav className="flex flex-col gap-6 mt-10">
                <a href="#" className="text-xl font-serif font-medium text-foreground hover:text-primary transition-colors">Menu</a>
                <a href="#heritage" className="text-xl font-serif font-medium text-foreground hover:text-primary transition-colors">Heritage</a>
                <a href="#tracker" className="text-xl font-serif font-medium text-foreground hover:text-primary transition-colors">Harbor Tracker</a>
                <Button className="w-full bg-primary text-primary-foreground">Order Online</Button>
             </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
