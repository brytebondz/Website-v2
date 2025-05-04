import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  name: string
  price: number
  image: string
  slug: string
}

export default function ProductCard({ name, price, image, slug }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-primary">{name}</h3>
        <p className="text-accent font-medium">₹{price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link href={`/products/${slug}`} className="flex-1">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        <Button size="icon" className="bg-primary hover:bg-primary/90">
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
