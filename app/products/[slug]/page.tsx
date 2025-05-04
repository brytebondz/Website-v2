import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react"
import ProductCard from "@/components/product-card"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // This would normally come from a database
  const product = {
    name: "Fresh Oyster Mushrooms",
    price: 120,
    description:
      "Premium quality fresh oyster mushrooms grown with care. Our mushrooms are harvested at the peak of freshness to ensure the best flavor and texture. Perfect for a variety of dishes including stir-fries, soups, and pasta.",
    images: ["/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (3).jpeg"],
    details: [
      "100% organic",
      "Harvested fresh",
      "Rich in nutrients",
      "Available in 250g packs",
      "Best consumed within 5 days of delivery",
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <Link href="/products" className="text-primary hover:underline">
          ← Back to Products
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold text-accent">₹{product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Inclusive of all taxes</p>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div>
            <h3 className="font-semibold">Product Details:</h3>
            <ul className="mt-2 space-y-1">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-md border">
              <Button variant="ghost" size="icon" className="rounded-r-none">
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <div className="px-4 py-2">1</div>
              <Button variant="ghost" size="icon" className="rounded-l-none">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>

          <div className="rounded-md bg-gray-50 p-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="font-medium">Free delivery on orders above ₹500</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">Estimated delivery: 2-3 business days</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </div>
    </div>
  )
}
