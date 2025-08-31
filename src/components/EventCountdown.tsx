import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

const EVENT_NAME = 'GFG Orientation';
const EVENT_DATE = new Date('2025-09-05T18:00:00');

interface TimeUnit {
  value: number;
  label: string;
}

export const EventCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: 'Days' },
    { value: 0, label: 'Hours' },
    { value: 0, label: 'Minutes' },
    { value: 0, label: 'Seconds' }
  ]);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft([
          { value: 0, label: 'Days' },
          { value: 0, label: 'Hours' },
          { value: 0, label: 'Minutes' },
          { value: 0, label: 'Seconds' }
        ]);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft([
        { value: days, label: 'Days' },
        { value: hours, label: 'Hours' },
        { value: minutes, label: 'Minutes' },
        { value: seconds, label: 'Seconds' }
      ]);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="campus-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <span className="text-gradient">Event: {EVENT_NAME}</span>
        </CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          Countdown to the upcoming event
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timeLeft.map((unit, index) => (
            <div 
              key={index}
              className="text-center p-4 rounded-lg bg-gradient-campus text-primary-foreground campus-bounce"
            >
              <div className="text-2xl md:text-3xl font-bold tabular-nums">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm font-medium opacity-90">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};