import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, CreditCard, Landmark, Truck } from "lucide-react"

export default function CheckoutPage() {
  // This would normally come from a state management solution or server
  const cartItems = [
    {
      id: 1,
      name: "Fresh Oyster Mushrooms",
      price: 120,
      quantity: 2,
    },
    {
      id: 2,
      name: "Dried Oyster Mushrooms",
      price: 180,
      quantity: 1,
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Checkout</h1>
        <p className="text-gray-500">Complete your order by providing your shipping and payment details</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="First name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Last name" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Email address" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Phone number" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Street address" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="State" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="zip">Postal Code</Label>
                    <Input id="zip" placeholder="Postal code" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Country" defaultValue="India" />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delivery Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="standard" className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="flex flex-1 cursor-pointer items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Standard Delivery</p>
                        <p className="text-sm text-gray-500">2-3 business days</p>
                      </div>
                    </div>
                    <span>₹50</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express" className="flex flex-1 cursor-pointer items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Express Delivery</p>
                        <p className="text-sm text-gray-500">Next business day</p>
                      </div>
                    </div>
                    <span>₹100</span>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="card" className="grid gap-4">
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex flex-1 cursor-pointer items-center">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Credit/Debit Card</p>
                        <p className="text-sm text-gray-500">Pay securely with your card</p>
                      </div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className="flex flex-1 cursor-pointer items-center">
                    <div className="flex items-center gap-2">
                      <Landmark className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">UPI</p>
                        <p className="text-sm text-gray-500">Pay using UPI</p>
                      </div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="flex flex-1 cursor-pointer items-center">
                    <div className="flex items-center gap-2">
                      <Landmark className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Cash on Delivery</p>
                        <p className="text-sm text-gray-500">Pay when you receive your order</p>
                      </div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full bg-primary hover:bg-primary/90">Place Order</Button>
              <Link href="/cart" className="w-full">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Cart
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
