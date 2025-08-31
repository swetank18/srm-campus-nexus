import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Building, Home, Coffee, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Place {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const PLACES: Place[] = [
  {
    id: 'tech',
    title: 'Tech Block',
    desc: 'Main lecture halls & CS departments. Nearest canteen: Block C canteen. Walk 3 mins.',
    icon: <Building className="h-6 w-6" />,
    color: 'bg-blue-500'
  },
  {
    id: 'hostel',
    title: 'Hostel',
    desc: 'Hostel complex A & B. Student mess timings: 7–10 AM, 12–2 PM, 7–9 PM.',
    icon: <Home className="h-6 w-6" />,
    color: 'bg-green-500'
  },
  {
    id: 'canteen',
    title: 'Main Canteen',
    desc: 'Largest canteen with multiple counters and affordable meals.',
    icon: <Coffee className="h-6 w-6" />,
    color: 'bg-orange-500'
  },
  {
    id: 'library',
    title: 'Library',
    desc: 'Main library with reading halls, book stacks & study rooms.',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'bg-purple-500'
  }
];

export const InteractiveMap = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const handlePlaceClick = (place: Place) => {
    setSelectedPlace(place);
  };

  return (
    <>
      <Card className="campus-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-gradient">Campus Guide</span>
          </CardTitle>
          <CardDescription>Click any location for directions and details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {PLACES.map((place) => (
              <Button
                key={place.id}
                variant="outline"
                className="h-auto p-4 campus-bounce flex flex-col items-center gap-3 hover:shadow-campus-hover"
                onClick={() => handlePlaceClick(place)}
              >
                <div className={`p-3 rounded-full ${place.color} text-white`}>
                  {place.icon}
                </div>
                <div className="text-center">
                  <div className="font-semibold">{place.title}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Navigation className="h-3 w-3" />
                    Get directions
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedPlace} onOpenChange={() => setSelectedPlace(null)}>
        <DialogContent className="glass-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedPlace && (
                <>
                  <div className={`p-2 rounded-lg ${selectedPlace.color} text-white`}>
                    {selectedPlace.icon}
                  </div>
                  {selectedPlace.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-left pt-2">
              {selectedPlace?.desc}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};