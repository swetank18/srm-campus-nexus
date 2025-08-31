import { CanteenMenu } from '@/components/CanteenMenu';
import { EventCountdown } from '@/components/EventCountdown';
import { InteractiveMap } from '@/components/InteractiveMap';
import { QuickInfo } from '@/components/QuickInfo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { KonamiEasterEgg } from '@/components/KonamiEasterEgg';
import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin, Clock, Users } from 'lucide-react';

const Index = () => {
  const navItems = [
    { name: 'Canteens', href: '#canteens', icon: <Clock className="h-4 w-4" /> },
    { name: 'Libraries', href: '#libraries', icon: <MapPin className="h-4 w-4" /> },
    { name: 'Clubs', href: '#clubs', icon: <Users className="h-4 w-4" /> }
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-campus text-primary-foreground font-bold text-lg">
                  SRM
                </div>
                <div>
                  <div className="font-bold text-lg">SRM Campus Helper</div>
                  <div className="text-xs text-muted-foreground">Quick guide for canteens, libraries & clubs</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    className="gap-2 campus-bounce"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.icon}
                    {item.name}
                  </Button>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Left Column - Main Content */}
          <div className="xl:col-span-3 space-y-6">
            {/* Hero Section */}
            <div className="text-center py-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <h1 className="text-4xl font-bold text-gradient">Campus Life Made Easy</h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your one-stop guide for SRM campus facilities, events, and daily essentials
              </p>
            </div>

            {/* Canteen Section */}
            <section id="canteens">
              <CanteenMenu />
            </section>

            {/* Event Countdown */}
            <section>
              <EventCountdown />
            </section>

            {/* Interactive Map */}
            <section>
              <InteractiveMap />
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="xl:col-span-1">
            <div className="sticky top-24">
              <QuickInfo />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-card/95 backdrop-blur border rounded-full p-2 shadow-campus">
          <div className="flex justify-around">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className="flex-1 gap-1 campus-bounce"
                onClick={() => scrollToSection(item.href)}
              >
                {item.icon}
                <span className="text-xs">{item.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Easter Egg */}
      <KonamiEasterEgg />
    </div>
  );
};

export default Index;
