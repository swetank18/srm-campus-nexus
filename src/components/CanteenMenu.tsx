import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MenuItem {
  item: string;
  category: string;
  price: number;
}

const CANTEEN_MENU: MenuItem[] = [
  { item: 'Masala Dosa', category: 'Breakfast', price: 60 },
  { item: 'Idli (2 pcs)', category: 'Breakfast', price: 30 },
  { item: 'Veg Thali', category: 'Lunch', price: 110 },
  { item: 'Chicken Biryani', category: 'Lunch', price: 140 },
  { item: 'Cold Coffee', category: 'Beverage', price: 40 },
  { item: 'Samosa', category: 'Snack', price: 20 }
];

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'breakfast': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
    case 'lunch': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    case 'beverage': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    case 'snack': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
  }
};

export const CanteenMenu = () => {
  return (
    <Card className="campus-card">
      <CardHeader>
        <CardTitle className="text-gradient">Canteen Menu</CardTitle>
        <CardDescription>Fresh meals and snacks available daily • Prices in INR</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {CANTEEN_MENU.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-card-foreground">{item.item}</h4>
                <Badge 
                  variant="secondary" 
                  className={`w-fit text-xs ${getCategoryColor(item.category)}`}
                >
                  {item.category}
                </Badge>
              </div>
              <div className="text-xl font-bold text-primary">
                ₹{item.price}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};