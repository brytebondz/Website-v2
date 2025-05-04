import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

export default function CartPage() {
  // This would normally come from a state management solution or server
  const cartItems = [
    {
      id: 1,
      name: "Fresh Oyster Mushrooms",
      price: 120,
      quantity: 2,
      image: "/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (3).jpeg",
    },
    {
      id: 2,
      name: "Dried Oyster Mushrooms",
      price: 180,
      quantity: 1,
      image: "/Mushroom/WhatsApp Image 2025-05-01 at 11.41.11 AM (2).jpeg",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Your Cart</h1>
        <p className="text-gray-500">Review your items and proceed to checkout</p>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">₹{item.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center rounded-md border">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-r-none">
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <div className="px-3 py-1 text-sm">{item.quantity}</div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-l-none">
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/products">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
                <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                  Clear Cart
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && <p className="text-xs text-gray-500">Free shipping on orders above ₹500</p>}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Including taxes</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/checkout" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Have a coupon?</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 rounded-md border px-3 py-2 text-sm"
                  />
                  <Button variant="outline">Apply</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-primary mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6 max-w-md">
            Looks like you haven't added any items to your cart yet. Explore our products and find something you'll
            love.
          </p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90">
              Browse Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
