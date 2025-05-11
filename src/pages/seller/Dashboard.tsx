
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export default function SellerDashboard() {
  const { user } = useAuth();

  return (
    <div className="coffee-container py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold">Seller Dashboard</h1>
        <Link to="/seller/listings/new">
          <Button className="mt-4 md:mt-0">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Add New Listing
          </Button>
        </Link>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Active Listings</CardTitle>
            <CardDescription>Your current coffee offerings</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-4xl font-bold">0</span>
            <Link to="/seller/listings" className="text-primary hover:underline text-sm">
              View All
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pending Orders</CardTitle>
            <CardDescription>Orders awaiting fulfillment</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-4xl font-bold">0</span>
            <Link to="/seller/orders" className="text-primary hover:underline text-sm">
              View All
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
            <CardDescription>Revenue from all completed orders</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-4xl font-bold">$0</span>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <Card>
          <CardContent className="p-6">
            <div className="text-center py-8">
              <svg className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              <h3 className="text-lg font-medium mb-2">No recent activity</h3>
              <p className="text-muted-foreground mb-4">
                Start by adding your first coffee listing to the marketplace.
              </p>
              <Link to="/seller/listings/new">
                <Button>Add Your First Listing</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Quick Tips for Sellers</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-coffee-100 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">Quality Photos Matter</h3>
            <p className="text-coffee-800">
              Upload clear, high-quality images of your coffee to attract more buyers.
            </p>
          </div>
          
          <div className="bg-coffee-100 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">Detailed Descriptions</h3>
            <p className="text-coffee-800">
              Include tasting notes, processing methods, and other details buyers care about.
            </p>
          </div>
          
          <div className="bg-coffee-100 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">Respond Quickly</h3>
            <p className="text-coffee-800">
              Fast responses to buyer inquiries lead to more successful transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
