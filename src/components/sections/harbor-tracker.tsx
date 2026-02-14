import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Anchor, Navigation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data for the harbor
const BOATS = [
  { id: '1', name: 'Sea Witch', type: 'Lobster', status: 'Inbound', eta: '10m' },
  { id: '2', name: 'Salem Pride', type: 'Crab', status: 'Docked', eta: 'Now' },
  { id: '3', name: 'Dark Tides', type: 'Oyster', status: 'Fishing', eta: '4h' },
];

export function HarborTracker() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-muted/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50">Live Data</Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Harbor Traffic Control
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track our fleet in real-time as they navigate Salem Sound. Fresh catches hit the counter immediately upon docking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Tracker Panel */}
          <Card className="bg-card/50 border-primary/20 backdrop-blur-sm lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Clock className="w-5 h-5" />
                <span>Next Arrival</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-mono font-bold text-foreground mb-2 tabular-nums tracking-wider">
                {formatTime(timeLeft)}
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                Estimated time until <strong>The Sea Witch</strong> docks at Wharf 3.
              </p>

              <div className="space-y-4">
                <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Active Vessels</h4>
                {BOATS.map((boat) => (
                  <div key={boat.id} className="flex items-center justify-between p-3 rounded-md bg-background/50 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${boat.status === 'Inbound' ? 'bg-green-500 animate-pulse' : 'bg-primary/50'}`} />
                      <div>
                        <p className="font-medium text-foreground">{boat.name}</p>
                        <p className="text-xs text-muted-foreground">{boat.type}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {boat.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interactive Map Visualization */}
          <div className="lg:col-span-2 aspect-[4/3] bg-card rounded-xl border border-primary/20 relative overflow-hidden group">
            {/* Map Abstract Grid */}
            <div className="absolute inset-0 opacity-20 text-primary" 
                 style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
            />
            
            {/* Coastline SVG (Abstract) */}
            <svg className="absolute inset-0 w-full h-full text-primary/10" viewBox="0 0 800 600">
              <path d="M0,0 L200,0 C250,100 300,50 400,150 C500,250 600,200 800,300 L800,600 L0,600 Z" fill="currentColor" />
            </svg>

            {/* Moving Boat Marker */}
            <motion.div
              className="absolute top-1/4 left-1/4"
              animate={{
                x: [0, 100, 200, 150, 0],
                y: [0, 50, 0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-sm animate-pulse" />
                <Navigation className="w-6 h-6 text-primary rotate-45 transform" />
                {/* Tooltip-like label */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-card border border-primary/20 px-4 py-4 rounded text-[10px] whitespace-nowrap text-foreground shadow-lg">
                  Sea Witch
                </div>
              </div>
            </motion.div>

            {/* Static Markers */}
            <div className="absolute bottom-1/4 right-1/3 flex flex-col items-center">
               <Anchor className="w-5 h-5 text-muted-foreground mb-1" />
               <span className="text-[10px] text-muted-foreground">Derby Wharf</span>
            </div>

            {/* Radar Sweep Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent w-[200%] h-full -skew-x-12 animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HarborTracker;
