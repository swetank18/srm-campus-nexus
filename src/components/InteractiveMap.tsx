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
  mapUrl?: string;
}

const PLACES: Place[] = [
  {
    id: 'tech',
    title: 'Tech Park',
    desc: 'Main lecture halls & CS departments. Nearest canteen: Block C canteen. Walk 3 mins.',
    icon: <Building className="h-6 w-6" />,
    color: 'bg-blue-500',
    mapUrl: 'https://www.google.com/maps/place/Tech+Park+Building,+SRM+University,+Potheri,+SRM+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8248119,80.042491,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f70ce1c18cd9:0xffb39775f24c16e9!8m2!3d12.8248119!4d80.0450659!16s%2Fg%2F12jss0xrr?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'paari',
    title: 'PAARI Hostel',
    desc: 'Student hostel with mess timings: 7–10 AM, 12–2 PM, 7–9 PM.',
    icon: <Home className="h-6 w-6" />,
    color: 'bg-green-500',
    mapUrl: 'https://www.google.com/maps/place/Paari+Block,+SRM+University,+Dr+Radhakrishnan+Rd,+Potheri,+SRM+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8224045,80.0410501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f772b79c582d:0xaa78043bb4f67d11!8m2!3d12.8224045!4d80.043625!16s%2Fg%2F12hmxdjrd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'mullai',
    title: 'MULLAI Hostel',
    desc: 'Student hostel with mess timings: 7–10 AM, 12–2 PM, 7–9 PM.',
    icon: <Home className="h-6 w-6" />,
    color: 'bg-green-600',
    mapUrl: 'https://www.google.com/maps/place/Paari+Block,+SRM+University,+Dr+Radhakrishnan+Rd,+Potheri,+SRM+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8224045,80.0410501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f772b79c582d:0xaa78043bb4f67d11!8m2!3d12.8224045!4d80.043625!16s%2Fg%2F12hmxdjrd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'kaari',
    title: 'KAARI Hostel',
    desc: 'Student hostel with mess timings: 7–10 AM, 12–2 PM, 7–9 PM.',
    icon: <Home className="h-6 w-6" />,
    color: 'bg-green-700',
    mapUrl: 'https://www.google.com/maps/place/Paari+Block,+SRM+University,+Dr+Radhakrishnan+Rd,+Potheri,+SRM+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8224045,80.0410501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f772b79c582d:0xaa78043bb4f67d11!8m2!3d12.8224045!4d80.043625!16s%2Fg%2F12hmxdjrd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'oori',
    title: 'OORI Hostel',
    desc: 'Student hostel with mess timings: 7–10 AM, 12–2 PM, 7–9 PM.',
    icon: <Home className="h-6 w-6" />,
    color: 'bg-emerald-500',
    mapUrl: 'https://www.google.com/maps/place/Paari+Block,+SRM+University,+Dr+Radhakrishnan+Rd,+Potheri,+SRM+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8224045,80.0410501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f772b79c582d:0xaa78043bb4f67d11!8m2!3d12.8224045!4d80.043625!16s%2Fg%2F12hmxdjrd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'adhiyaman',
    title: 'ADHIYAMAN Hostel',
    desc: 'Student hostel with mess timings: 7–10 AM, 12–2 PM, 7–9 PM.',
    icon: <Home className="h-6 w-6" />,
    color: 'bg-emerald-600',
    mapUrl: 'https://www.google.com/maps/place/Paari+Block,+SRM+University,+Dr+Radhakrishnan+Rd,+Potheri,+SRM+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8224045,80.0410501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f772b79c582d:0xaa78043bb4f67d11!8m2!3d12.8224045!4d80.043625!16s%2Fg%2F12hmxdjrd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'nelson',
    title: 'NELSON MANDELA Hostel',
    desc: 'Student hostel with mess timings: 7–10 AM, 12–2 PM, 7–9 PM.',
    icon: <Home className="h-6 w-6" />,
    color: 'bg-emerald-700',
    mapUrl: 'https://www.google.com/maps/place/Paari+Block,+SRM+University,+Dr+Radhakrishnan+Rd,+Potheri,+SRM+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8224045,80.0410501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f772b79c582d:0xaa78043bb4f67d11!8m2!3d12.8224045!4d80.043625!16s%2Fg%2F12hmxdjrd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'manoranjitham',
    title: 'MANORANJITHAM Hostel',
    desc: 'Student hostel with mess timings: 7–10 AM, 12–2 PM, 7–9 PM.',
    icon: <Home className="h-6 w-6" />,
    color: 'bg-teal-500',
    mapUrl: 'https://www.google.com/maps/place/Paari+Block,+SRM+University,+Dr+Radhakrishnan+Rd,+Potheri,+SRM+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8224045,80.0410501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f772b79c582d:0xaa78043bb4f67d11!8m2!3d12.8224045!4d80.043625!16s%2Fg%2F12hmxdjrd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'sannasi',
    title: 'SANNASI Hostel',
    desc: 'Student hostel with mess timings: 7–10 AM, 12–2 PM, 7–9 PM.',
    icon: <Home className="h-6 w-6" />,
    color: 'bg-teal-600',
    mapUrl: 'https://www.google.com/maps/place/Paari+Block,+SRM+University,+Dr+Radhakrishnan+Rd,+Potheri,+SRM+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8224045,80.0410501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f772b79c582d:0xaa78043bb4f67d11!8m2!3d12.8224045!4d80.043625!16s%2Fg%2F12hmxdjrd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'agasthiyar',
    title: 'AGASTHIYAR Hostel',
    desc: 'Student hostel with mess timings: 7–10 AM, 12–2 PM, 7–9 PM.',
    icon: <Home className="h-6 w-6" />,
    color: 'bg-teal-700',
    mapUrl: 'https://www.google.com/maps/place/Paari+Block,+SRM+University,+Dr+Radhakrishnan+Rd,+Potheri,+SRM+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8224045,80.0410501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f772b79c582d:0xaa78043bb4f67d11!8m2!3d12.8224045!4d80.043625!16s%2Fg%2F12hmxdjrd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'began',
    title: 'BEGAN Hostel',
    desc: 'Student hostel with mess timings: 7–10 AM, 12–2 PM, 7–9 PM.',
    icon: <Home className="h-6 w-6" />,
    color: 'bg-cyan-500',
    mapUrl: 'https://www.google.com/maps/place/Paari+Block,+SRM+University,+Dr+Radhakrishnan+Rd,+Potheri,+SRM+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8224045,80.0410501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f772b79c582d:0xaa78043bb4f67d11!8m2!3d12.8224045!4d80.043625!16s%2Fg%2F12hmxdjrd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
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
          {selectedPlace?.mapUrl && (
            <div className="flex gap-2 mt-4">
              <Button
                onClick={() => window.open(selectedPlace.mapUrl, '_blank')}
                className="flex items-center gap-2"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};