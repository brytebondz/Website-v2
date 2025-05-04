import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, ShoppingBag, User } from "lucide-react"

export default function AccountPage() {
  // This would normally come from a database
  const orders = [
    {
      id: "ORD123456",
      date: "2025-04-28",
      status: "Delivered",
      total: 420,
    },
    {
      id: "ORD123455",
      date: "2025-04-15",
      status: "Processing",
      total: 350,
    },
    {
      id: "ORD123454",
      date: "2025-03-22",
      status: "Delivered",
      total: 180,
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">My Account</h1>
        <p className="text-gray-500">Manage your account details and view your orders</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span>Orders</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="John" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Doe" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+91 98765 43210" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Address Information</CardTitle>
              <CardDescription>Update your shipping address</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Main Street" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="Chennai" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" defaultValue="Tamil Nadu" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="zip">Postal Code</Label>
                    <Input id="zip" defaultValue="600001" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" defaultValue="India" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-primary/90">Update Password</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>View your recent orders</CardDescription>
            </CardHeader>
            <CardContent>
              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between rounded-md border p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-primary" />
                          <p className="font-medium">{order.id}</p>
                        </div>
                        <p className="text-sm text-gray-500">Placed on {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{order.total.toFixed(2)}</p>
                        <p className={`text-sm ${order.status === "Delivered" ? "text-green-500" : "text-orange-500"}`}>
                          {order.status}
                        </p>
                      </div>
                      <Link href={`/account/orders/${order.id}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <ShoppingBag className="h-12 w-12 text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">No orders yet</h3>
                  <p className="text-gray-500 mb-4">
                    You haven't placed any orders yet. Start shopping to place your first order.
                  </p>
                  <Link href="/products">
                    <Button className="bg-primary hover:bg-primary/90">Shop Now</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
