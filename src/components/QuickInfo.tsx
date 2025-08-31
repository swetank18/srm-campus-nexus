import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, BookOpen, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const QuickInfo = () => {
  const quickLinks = [
    { name: 'Canteens', href: '#canteens', icon: <Clock className="h-4 w-4" /> },
    { name: 'Libraries', href: '#libraries', icon: <BookOpen className="h-4 w-4" /> },
    { name: 'Clubs', href: '#clubs', icon: <Users className="h-4 w-4" /> }
  ];

  return (
    <div className="space-y-4">
      <Card className="campus-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Link className="h-5 w-5 text-primary" />
            Quick Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {quickLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                className="w-full justify-start gap-2 campus-bounce"
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {link.icon}
                {link.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="campus-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="h-5 w-5 text-primary" />
            Libraries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-semibold text-card-foreground">Main Library</div>
              <div className="text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                8:00 AM to 9:00 PM
              </div>
            </div>
            <div>
              <div className="font-semibold text-card-foreground">Digital Library</div>
              <div className="text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                24x7 (student access)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="campus-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="h-5 w-5 text-primary" />
            Clubs & Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-semibold text-card-foreground">GFG | Coding Club</div>
              <div className="text-muted-foreground">Weekly meetups & contests</div>
            </div>
            <div>
              <div className="font-semibold text-card-foreground">Robotics Club</div>
              <div className="text-muted-foreground">Workshops & hardware projects</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};