import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Filter } from "lucide-react"
import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Our Products</h1>
        <p className="text-gray-500">Discover our range of premium quality mushroom products</p>
      </div>

      <div className="mt-8 flex flex-col gap-6 md:flex-row">
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 shrink-0">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="fresh" className="rounded border-gray-300" />
                      <label htmlFor="fresh">Fresh Mushrooms</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="dried" className="rounded border-gray-300" />
                      <label htmlFor="dried">Dried Mushrooms</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="growing-kits" className="rounded border-gray-300" />
                      <label htmlFor="growing-kits">Growing Kits</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="supplements" className="rounded border-gray-300" />
                      <label htmlFor="supplements">Supplements</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="price-1" className="rounded border-gray-300" />
                      <label htmlFor="price-1">Under ₹100</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="price-2" className="rounded border-gray-300" />
                      <label htmlFor="price-2">₹100 - ₹200</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="price-3" className="rounded border-gray-300" />
                      <label htmlFor="price-3">₹200 - ₹300</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="price-4" className="rounded border-gray-300" />
                      <label htmlFor="price-4">Above ₹300</label>
                    </div>
                  </div>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Mobile Filters */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                Featured
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Desktop Sort */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">Showing 9 products</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                Featured
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              name="Fresh Oyster Mushrooms"
              price={120}
              image="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (3).jpeg"
              slug="fresh-oyster-mushrooms"
            />
            <ProductCard
              name="Dried Oyster Mushrooms"
              price={180}
              image="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.11 AM (2).jpeg"
              slug="dried-oyster-mushrooms"
            />
            <ProductCard
              name="Mushroom Growing Kit"
              price={350}
              image="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.11 AM (3).jpeg"
              slug="mushroom-growing-kit"
            />
            <ProductCard
              name="Oyster Mushroom Powder"
              price={220}
              image="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.12 AM (1).jpeg"
              slug="oyster-mushroom-powder"
            />
            <ProductCard
              name="Premium Mushroom Mix"
              price={250}
              image="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (2).jpeg"
              slug="premium-mushroom-mix"
            />
            <ProductCard
              name="Mushroom Supplement Capsules"
              price={450}
              image="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (3).jpeg"
              slug="mushroom-supplement-capsules"
            />
            <ProductCard
              name="Gourmet Mushroom Box"
              price={399}
              image="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.11 AM (2).jpeg"
              slug="gourmet-mushroom-box"
            />
            <ProductCard
              name="Mushroom Seasoning"
              price={150}
              image="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.11 AM (3).jpeg"
              slug="mushroom-seasoning"
            />
            <ProductCard
              name="Mushroom Starter Kit"
              price={299}
              image="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.12 AM (1).jpeg"
              slug="mushroom-starter-kit"
            />
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
