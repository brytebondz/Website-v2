import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.jpeg" alt="Bryte Bondz Logo" width={50} height={50} className="rounded-full" />
              <h3 className="text-xl font-bold">Bryte Bondz</h3>
            </div>
            <p className="text-sm text-gray-300">
              Premium quality mushrooms grown with care. Taste the difference with Bryte Bondz.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-accent">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-accent">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-accent">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0" />
                <span>No 10, Narayana Puram, Kilakudierupu, Palathur, Sivagangai - 630107</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@brytebondz.com</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter for updates on new products and special offers.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-md border border-gray-600 bg-primary-foreground/10 px-3 py-2 text-sm"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-3 py-2 text-sm font-medium text-white hover:bg-accent/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Bryte Bondz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
