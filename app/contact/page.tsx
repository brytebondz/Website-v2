import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Contact Us</h1>
        <p className="text-gray-500 max-w-3xl">
          Have questions about our products or services? We're here to help. Reach out to us using any of the methods
          below.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject of your message" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                </div>
                <Button className="bg-primary hover:bg-primary/90">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us directly using the information below.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-500">No 10, Narayana Puram, Kilakudierupu, Palathur, Sivagangai - 630107</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-500">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-500">info@brytebondz.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>When you can reach us.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Do you offer delivery?</h3>
                <p className="text-gray-500">
                  Yes, we offer delivery within a 50km radius. Free delivery on orders above ₹500.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">How long do your mushrooms stay fresh?</h3>
                <p className="text-gray-500">Our fresh mushrooms stay good for 5-7 days when refrigerated properly.</p>
              </div>
              <div>
                <h3 className="font-semibold">Do you offer bulk orders?</h3>
                <p className="text-gray-500">
                  Yes, we offer special pricing for bulk orders. Please contact us for more information.
                </p>
              </div>
              <Link href="/faq">
                <Button variant="link" className="p-0 text-primary">
                  View all FAQs
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Location</CardTitle>
            <CardDescription>Find us on the map.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full rounded-md bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Map will be embedded here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
