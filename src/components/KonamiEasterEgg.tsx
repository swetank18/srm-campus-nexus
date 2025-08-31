import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trophy, Sparkles } from 'lucide-react';

const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

export const KonamiEasterEgg = () => {
  const [position, setPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === KONAMI_CODE[position]) {
        const newPosition = position + 1;
        setPosition(newPosition);
        
        if (newPosition === KONAMI_CODE.length) {
          setShowModal(true);
          setPosition(0);
        }
      } else {
        setPosition(0);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [position]);

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="glass-card max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-center justify-center">
            <Trophy className="h-6 w-6 text-accent animate-bounce" />
            <span className="text-gradient">Secret Unlocked!</span>
            <Sparkles className="h-6 w-6 text-accent animate-pulse" />
          </DialogTitle>
          <DialogDescription className="text-center pt-4">
            <div className="text-lg mb-2">🎉</div>
            <p className="text-base">
              You found the Konami code — Submit with confidence!
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Good luck, GFG member!
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button 
            onClick={() => setShowModal(false)}
            className="campus-bounce"
          >
            Awesome!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};