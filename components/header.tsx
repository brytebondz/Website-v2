"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-primary-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.jpeg" alt="Bryte Bondz Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold hidden md:inline-block">Bryte Bondz</span>
          </Link>
        </div>
        <nav
          className={cn(
            "absolute left-0 right-0 top-16 bg-primary p-4 md:static md:p-0 md:flex md:items-center md:gap-6",
            isMenuOpen ? "block" : "hidden md:flex",
          )}
        >
          <Link
            href="/"
            className="block py-2 text-lg font-medium hover:text-accent md:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block py-2 text-lg font-medium hover:text-accent md:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/recipes"
            className="block py-2 text-lg font-medium hover:text-accent md:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Recipes
          </Link>
          <Link
            href="/about"
            className="block py-2 text-lg font-medium hover:text-accent md:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-lg font-medium hover:text-accent md:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/account">
            <Button variant="ghost" size="icon" className="text-white hover:bg-primary-foreground/10">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="text-white hover:bg-primary-foreground/10">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
