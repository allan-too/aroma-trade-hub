
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

// Sample coffee data (in a real app this would come from an API)
const sampleCoffee = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    origin: "Ethiopia",
    price: 14.99,
    roastLevel: "Medium",
    processType: "Washed",
    certifications: ["Organic", "Fair Trade"],
    rating: 4.7,
    seller: "Highland Coffee Co.",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    origin: "Colombia",
    price: 12.99,
    roastLevel: "Light",
    processType: "Natural",
    certifications: ["Rainforest Alliance"],
    rating: 4.5,
    seller: "Mountain Bean Roasters",
  },
  {
    id: 3,
    name: "Kenyan AA",
    origin: "Kenya",
    price: 16.99,
    roastLevel: "Medium-Dark",
    processType: "Washed",
    certifications: ["Direct Trade"],
    rating: 4.8,
    seller: "Savanna Estates",
  },
  {
    id: 4,
    name: "Guatemala Antigua",
    origin: "Guatemala",
    price: 15.99,
    roastLevel: "Medium",
    processType: "Honey",
    certifications: ["Organic"],
    rating: 4.6,
    seller: "Cloud Forest Coffee",
  },
  {
    id: 5,
    name: "Sumatra Mandheling",
    origin: "Indonesia",
    price: 18.99,
    roastLevel: "Dark",
    processType: "Wet-Hulled",
    certifications: ["Fair Trade", "Rainforest Alliance"],
    rating: 4.4,
    seller: "Pacific Rim Imports",
  },
  {
    id: 6,
    name: "Costa Rica Tarrazu",
    origin: "Costa Rica",
    price: 14.49,
    roastLevel: "Medium",
    processType: "Washed",
    certifications: ["Organic", "Bird Friendly"],
    rating: 4.6,
    seller: "Volcano Coffee Works",
  },
];

export default function Marketplace() {
  const [priceRange, setPriceRange] = useState([10, 20]);
  const [searchTerm, setSearchTerm] = useState("");

  // These would be full filter states in a real app
  const [filteredCoffee, setFilteredCoffee] = useState(sampleCoffee);

  return (
    <div className="coffee-container py-8">
      <h1 className="text-3xl font-bold mb-6">Coffee Marketplace</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            
            <div className="mb-6">
              <Label htmlFor="search" className="mb-2 block">Search</Label>
              <Input
                id="search"
                placeholder="Search coffee..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Price Range ($/lb)</h3>
              <div className="px-2">
                <Slider
                  defaultValue={[10, 20]}
                  min={5}
                  max={30}
                  step={0.5}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value)}
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Origin</h3>
              <div className="space-y-2">
                {["Ethiopia", "Colombia", "Kenya", "Guatemala", "Indonesia"].map((origin) => (
                  <div className="flex items-center" key={origin}>
                    <Checkbox id={`origin-${origin}`} />
                    <Label htmlFor={`origin-${origin}`} className="ml-2 text-sm font-normal">
                      {origin}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Roast Level</h3>
              <div className="space-y-2">
                {["Light", "Medium", "Medium-Dark", "Dark"].map((roast) => (
                  <div className="flex items-center" key={roast}>
                    <Checkbox id={`roast-${roast}`} />
                    <Label htmlFor={`roast-${roast}`} className="ml-2 text-sm font-normal">
                      {roast}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Certifications</h3>
              <div className="space-y-2">
                {["Organic", "Fair Trade", "Rainforest Alliance", "Direct Trade", "Bird Friendly"].map((cert) => (
                  <div className="flex items-center" key={cert}>
                    <Checkbox id={`cert-${cert}`} />
                    <Label htmlFor={`cert-${cert}`} className="ml-2 text-sm font-normal">
                      {cert}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button variant="outline" className="w-full">Reset Filters</Button>
          </div>
        </div>
        
        {/* Coffee Listings */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <p className="text-muted-foreground">Showing {filteredCoffee.length} results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCoffee.map((coffee) => (
              <div key={coffee.id} className="coffee-card">
                <div className="h-48 bg-coffee-200 relative">
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary">{coffee.roastLevel}</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{coffee.name}</h3>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm">{coffee.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span>{coffee.origin}</span>
                    <span className="mx-2">•</span>
                    <span>{coffee.processType}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {coffee.certifications.map((cert) => (
                      <Badge key={cert} variant="outline" className="text-xs">{cert}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${coffee.price.toFixed(2)}/lb</span>
                    <span className="text-xs text-muted-foreground">{coffee.seller}</span>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Button size="sm" className="w-full">View Details</Button>
                    <Button size="sm" variant="outline" className="w-full">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
