import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, ShoppingCart, Utensils } from "lucide-react"

interface RecipePageProps {
  params: {
    id: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  // This would normally come from a database
  const recipe = {
    id: "oyster-mushroom-curry",
    title: "Oyster Mushroom Curry",
    description:
      "This rich and aromatic curry highlights the meaty texture of oyster mushrooms, making it a hearty main dish.",
    image: "/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (2).jpeg",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "200g oyster mushrooms, cleaned and sliced",
      "1 large onion, finely chopped",
      "2 tomatoes, pureed",
      "1 tsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh coriander leaves for garnish",
    ],
    instructions: [
      "Heat oil in a pan over medium heat. Add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until golden brown.",
      "Stir in ginger-garlic paste and cook for 2 minutes.",
      "Add tomato puree, turmeric, red chili powder, and salt. Cook until the oil separates.",
      "Add sliced oyster mushrooms and mix well. Cover and cook for 10 minutes, stirring occasionally.",
      "Sprinkle garam masala, mix, and cook for another 2 minutes.",
      "Garnish with fresh coriander leaves and serve hot with rice or chapati.",
    ],
    tips: [
      "For a richer flavor, add a tablespoon of cream at the end.",
      "You can add vegetables like peas or bell peppers for added nutrition.",
      "Adjust the spice level according to your preference.",
    ],
    relatedProducts: [
      {
        name: "Fresh Oyster Mushrooms",
        price: 120,
        image: "/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (3).jpeg",
        slug: "fresh-oyster-mushrooms",
      },
      {
        name: "Garam Masala Spice Mix",
        price: 80,
        image: "/Mushroom/WhatsApp Image 2025-05-01 at 11.41.11 AM (2).jpeg",
        slug: "garam-masala-spice-mix",
      },
    ],
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <Link href="/recipes" className="text-primary hover:underline">
          ← Back to Recipes
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">{recipe.title}</h1>
            <p className="mt-2 text-gray-600">{recipe.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-gray-500">
                <Clock className="h-4 w-4" />
                <span>Prep: {recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Utensils className="h-4 w-4" />
                <span>Cook: {recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <span>Servings: {recipe.servings}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <span>Difficulty: {recipe.difficulty}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary">Ingredients</h2>
            <ul className="mt-4 space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary">Instructions</h2>
            <ol className="mt-4 space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    {index + 1}
                  </div>
                  <p>{instruction}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary">Tips</h2>
            <ul className="mt-4 space-y-2">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Ingredients You'll Need</h3>
              <div className="space-y-4">
                {recipe.relatedProducts.map((product) => (
                  <div key={product.slug} className="flex gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-accent">₹{product.price.toFixed(2)}</p>
                    </div>
                    <Link href={`/products/${product.slug}`}>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                ))}
                <Link href="/products">
                  <Button variant="outline" className="w-full">
                    View All Products
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Share This Recipe</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Nutritional Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Calories</span>
                  <span>180 kcal</span>
                </div>
                <div className="flex justify-between">
                  <span>Protein</span>
                  <span>5g</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbohydrates</span>
                  <span>15g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fat</span>
                  <span>12g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fiber</span>
                  <span>3g</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                *Nutritional information is approximate and may vary based on specific ingredients used.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
