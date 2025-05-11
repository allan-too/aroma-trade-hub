
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

export default function BuyerDashboard() {
  const { user } = useAuth();

  return (
    <div className="coffee-container py-8">
      <h1 className="text-3xl font-bold mb-6">Buyer Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Your most recent coffee purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No orders yet. Start shopping!</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Favorite Sellers</CardTitle>
            <CardDescription>Coffee sellers you've favorited</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No favorites yet. Browse the marketplace!</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Saved Items</CardTitle>
            <CardDescription>Coffee products you've saved</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No saved items yet.</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="coffee-card">
            <div className="h-48 bg-coffee-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Ethiopian Yirgacheffe</h3>
              <p className="text-sm text-muted-foreground mb-2">Medium Roast • Washed</p>
              <p className="font-medium">$14.99/lb</p>
            </div>
          </div>
          
          <div className="coffee-card">
            <div className="h-48 bg-coffee-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Colombian Supremo</h3>
              <p className="text-sm text-muted-foreground mb-2">Light Roast • Natural</p>
              <p className="font-medium">$12.99/lb</p>
            </div>
          </div>
          
          <div className="coffee-card">
            <div className="h-48 bg-coffee-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Kenyan AA</h3>
              <p className="text-sm text-muted-foreground mb-2">Medium-Dark Roast • Washed</p>
              <p className="font-medium">$16.99/lb</p>
            </div>
          </div>
          
          <div className="coffee-card">
            <div className="h-48 bg-coffee-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Guatemala Antigua</h3>
              <p className="text-sm text-muted-foreground mb-2">Medium Roast • Honey</p>
              <p className="font-medium">$15.99/lb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
