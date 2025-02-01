import {
  Watch,
  Headphones,
  Keyboard,
  Laptop,
  Menu,
  Monitor,
  Mouse,
  Search,
  ShoppingCart,
  Smartphone,
  Speaker,
  User,
} from "lucide-react";

type NavLink = {
  href: string;
  label: string;
};

export const NavLinks: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/products", label: "products" },
  { href: "/favorites", label: "favorites" },
  { href: "/cart", label: "cart" },
  { href: "/orders", label: "orders" },
];

type CategoryLink = {
  href: string;
  icon: React.ReactNode;
  category: string;
};

export const CategoryLinks: CategoryLink[] = [
  { href: "/", icon: <Watch />, category: "Watch" },
  { href: "/", icon: <Speaker />, category: "Speaker" },
  { href: "/", icon: <Mouse />, category: "Mouse" },
  { href: "/", icon: <Monitor />, category: "Monitor" },
  { href: "/", icon: <Smartphone />, category: "Mobile Phone" },
  { href: "/", icon: <Laptop />, category: "Laptop" },
  { href: "/", icon: <Keyboard />, category: "Keyboard" },
  { href: "/", icon: <Headphones />, category: "Headphone" },
];
