import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Clock, Utensils } from "lucide-react"

export default function RecipesPage() {
  const recipes = [
    {
      id: "oyster-mushroom-curry",
      title: "Oyster Mushroom Curry",
      description:
        "This rich and aromatic curry highlights the meaty texture of oyster mushrooms, making it a hearty main dish.",
      image: "/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (2).jpeg",
      prepTime: "15 mins",
      cookTime: "25 mins",
      difficulty: "Medium",
    },
    {
      id: "oyster-mushroom-chips",
      title: "Oyster Mushroom Chips",
      description:
        "Crispy and savory, these chips are a healthy alternative to traditional snacks and are perfect for munching.",
      image: "/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (3).jpeg",
      prepTime: "10 mins",
      cookTime: "15 mins",
      difficulty: "Easy",
    },
    {
      id: "mushroom-pasta",
      title: "Creamy Mushroom Pasta",
      description: "A delicious pasta dish with a creamy mushroom sauce that's perfect for a quick weeknight dinner.",
      image: "/Mushroom/WhatsApp Image 2025-05-01 at 11.41.11 AM (2).jpeg",
      prepTime: "10 mins",
      cookTime: "20 mins",
      difficulty: "Easy",
    },
    {
      id: "mushroom-soup",
      title: "Mushroom Soup",
      description: "A comforting and nutritious soup that's perfect for cold days. Rich in flavor and easy to make.",
      image: "/Mushroom/WhatsApp Image 2025-05-01 at 11.41.11 AM (3).jpeg",
      prepTime: "15 mins",
      cookTime: "30 mins",
      difficulty: "Easy",
    },
    {
      id: "mushroom-stir-fry",
      title: "Mushroom Stir Fry",
      description: "A quick and easy stir fry that's packed with flavor. Perfect for a healthy weeknight dinner.",
      image: "/Mushroom/WhatsApp Image 2025-05-01 at 11.41.12 AM (1).jpeg",
      prepTime: "10 mins",
      cookTime: "15 mins",
      difficulty: "Easy",
    },
    {
      id: "stuffed-mushrooms",
      title: "Stuffed Mushrooms",
      description: "Delicious mushrooms stuffed with a savory filling. Perfect as an appetizer or side dish.",
      image: "/Mushroom/WhatsApp Image 2025-05-01 at 11.41.03 AM (2).jpeg",
      prepTime: "20 mins",
      cookTime: "25 mins",
      difficulty: "Medium",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Delicious Mushroom Recipes</h1>
        <p className="text-gray-500 max-w-3xl">
          Discover our collection of delicious recipes featuring our premium mushrooms. From quick and easy meals to
          gourmet dishes, there's something for everyone.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={recipe.image || "/placeholder.svg"}
                alt={recipe.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-primary">{recipe.title}</h2>
              <p className="mt-2 text-gray-500 line-clamp-2">{recipe.description}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{recipe.prepTime} prep</span>
                </div>
                <div className="flex items-center gap-1">
                  <Utensils className="h-4 w-4" />
                  <span>{recipe.cookTime} cook</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/recipes/${recipe.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  View Recipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
