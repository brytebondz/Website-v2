import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Leaf, ShieldCheck } from "lucide-react"
import ProductCard from "@/components/product-card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Premium Quality Mushrooms for Your Health
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Discover the finest oyster mushrooms grown with care. Nutritious, delicious, and delivered fresh to your
                doorstep.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link href="/products">
                  <Button className="bg-accent hover:bg-accent/90">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-white text-white bg-black hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (2).jpeg"
                alt="Fresh Oyster Mushrooms"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Why Choose Bryte Bondz?
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We grow premium quality mushrooms with care and dedication
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card className="border-2 border-primary/10">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Leaf className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary">Organic Farming</h3>
                <p className="text-gray-500">
                  Our mushrooms are grown using organic methods without harmful chemicals.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Award className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary">Premium Quality</h3>
                <p className="text-gray-500">We maintain the highest standards to ensure premium quality mushrooms.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <ShieldCheck className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary">Health Benefits</h3>
                <p className="text-gray-500">Our mushrooms are packed with nutrients and health benefits.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Featured Products</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our selection of premium mushroom products
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
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
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Health Benefits of Oyster Mushrooms
              </h2>
              <p className="text-gray-500">
                Oyster mushrooms (Pleurotus ostreatus) are a nutrient-rich superfood. They're low in calories and fat,
                but high in protein, fiber, vitamin B-complex, and essential minerals like iron, zinc, and potassium.
                These mushrooms support heart health, boost immunity, and offer antioxidant and anti-inflammatory
                benefits. A perfect addition to a healthy, balanced diet!
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Rich in protein and fiber</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>High in vitamin B-complex</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Contains essential minerals</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Supports heart health</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Boosts immunity</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.12 AM (1).jpeg"
                alt="Oyster Mushrooms"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipe */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Featured Recipe</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Try our delicious oyster mushroom recipes
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-8">
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (2).jpeg"
                alt="Oyster Mushroom Curry"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Oyster Mushroom Curry</h3>
              <p className="text-gray-500">
                This rich and aromatic curry highlights the meaty texture of oyster mushrooms, making it a hearty main
                dish.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Ingredients:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-500">
                  <li>200g oyster mushrooms, cleaned and sliced</li>
                  <li>1 large onion, finely chopped</li>
                  <li>2 tomatoes, pureed</li>
                  <li>1 tsp ginger-garlic paste</li>
                  <li>1 tsp cumin seeds</li>
                  <li>1/2 tsp turmeric powder</li>
                  <li>1 tsp red chili powder</li>
                  <li>1 tsp garam masala</li>
                  <li>Salt to taste</li>
                  <li>2 tbsp oil</li>
                  <li>Fresh coriander leaves for garnish</li>
                </ul>
              </div>
              <Link href="/recipes">
                <Button className="bg-primary hover:bg-primary/90">
                  View Full Recipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">What Our Customers Say</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <p className="text-gray-500 mb-4">
                  "The oyster mushrooms from Bryte Bondz are the freshest I've ever had. They have a wonderful flavor
                  and texture. Highly recommended!"
                </p>
                <p className="font-semibold">- Priya S.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <p className="text-gray-500 mb-4">
                  "I've been using their mushroom growing kit and it's been a great experience. The instructions are
                  clear and the yield is impressive."
                </p>
                <p className="font-semibold">- Rajesh K.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <p className="text-gray-500 mb-4">
                  "The dried mushrooms are perfect for my cooking needs. They rehydrate well and retain their flavor.
                  Will definitely buy again!"
                </p>
                <p className="font-semibold">- Anita M.</p>
              </CardContent>
            </Card>
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
