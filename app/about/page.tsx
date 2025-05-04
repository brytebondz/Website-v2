import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, CheckCircle, Leaf, ShieldCheck } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Bryte Bondz</h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                We are passionate about growing premium quality mushrooms and bringing the best of nature to your table.
              </p>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (2).jpeg"
                alt="Bryte Bondz Mushroom Farm"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (3).jpeg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Our Story</h2>
              <p className="text-gray-500">
                Bryte Bondz was founded with a simple mission: to grow the highest quality mushrooms using sustainable
                practices. What started as a small family operation has grown into a trusted name in premium mushroom
                cultivation.
              </p>
              <p className="text-gray-500 mt-4">
                Our journey began when we discovered the incredible nutritional benefits and culinary versatility of
                oyster mushrooms. We dedicated ourselves to mastering the art of mushroom cultivation, combining
                traditional knowledge with modern techniques to produce exceptional mushrooms.
              </p>
              <p className="text-gray-500 mt-4">
                Today, we take pride in delivering fresh, nutritious mushrooms to homes and restaurants across the
                region, while maintaining our commitment to quality, sustainability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter text-primary">Our Values</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary/10">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Leaf className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary">Sustainability</h3>
                <p className="text-gray-500 mt-2">
                  We are committed to environmentally friendly farming practices that minimize waste and conserve
                  resources.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Award className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary">Quality</h3>
                <p className="text-gray-500 mt-2">
                  We never compromise on quality, ensuring that every mushroom meets our high standards before reaching
                  your table.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <ShieldCheck className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary">Integrity</h3>
                <p className="text-gray-500 mt-2">
                  We believe in transparency and honesty in all our business practices and relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter text-primary">Our Process</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              How we grow our premium mushrooms
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-primary">Substrate Preparation</h3>
              <p className="text-gray-500 mt-2">
                We carefully prepare the growing medium using organic materials to create the perfect environment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-primary">Inoculation</h3>
              <p className="text-gray-500 mt-2">
                We introduce high-quality mushroom spawn to the substrate under controlled conditions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-primary">Cultivation</h3>
              <p className="text-gray-500 mt-2">
                Our mushrooms grow in a carefully monitored environment with optimal temperature, humidity, and air
                flow.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-primary">Harvesting</h3>
              <p className="text-gray-500 mt-2">
                We harvest our mushrooms at the peak of freshness to ensure the best flavor and nutritional value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter text-primary">Our Certifications</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We adhere to the highest standards in the industry
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4">
              <CheckCircle className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-semibold text-primary">Organic Certified</h3>
                <p className="text-sm text-gray-500">
                  Our mushrooms are grown without synthetic pesticides or fertilizers
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-semibold text-primary">FSSAI Registered</h3>
                <p className="text-sm text-gray-500">We comply with all food safety standards and regulations</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-semibold text-primary">Quality Tested</h3>
                <p className="text-sm text-gray-500">
                  Our products undergo rigorous quality testing before distribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Experience Premium Mushrooms?
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Order now and taste the difference
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/products">
                <Button className="bg-accent hover:bg-accent/90">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
