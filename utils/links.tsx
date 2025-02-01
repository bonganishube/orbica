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
  icon?: React.ReactNode;
  label: string;
};

export const NavLinks: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/products", label: "products" },
  { href: "/favorites", label: "favorites" },
  { href: "/cart", label: "cart" },
  { href: "/orders", label: "orders" },
  { href: '/admin/sales', label: 'dashboard' },
];

export const adminLinks: NavLink[] = [
  { href: '/admin/sales', label: 'sales' },
  { href: '/admin/products', label: 'my products' },
  { href: '/admin/products/create', label: 'create product' },
];

export const CategoryLinks: NavLink[] = [
  { href: "/", icon: <Watch />, label: "watch" },
  { href: "/", icon: <Speaker />, label: "speaker" },
  { href: "/", icon: <Mouse />, label: "mouse" },
  { href: "/", icon: <Monitor />, label: "monitor" },
  { href: "/", icon: <Smartphone />, label: "mobile phone" },
  { href: "/", icon: <Laptop />, label: "Laptop" },
  { href: "/", icon: <Keyboard />, label: "keyboard" },
  { href: "/", icon: <Headphones />, label: "headphone" },
];
