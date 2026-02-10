/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Utensils,
  ChevronDown,
  Search,
  X,
  Soup,
  Fish,
  Star,
  Wine,
  CakeSlice,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  isSpecial?: boolean;
};

const allMenuItems: MenuItem[] = [
  // Featured (default top mixed)
  {
    id: 1,
    name: "Grilled Lobster",
    description: "Fresh catch with garlic butter",
    price: "LKR 5,200",
    category: "specials",
    isSpecial: true,
  },
  {
    id: 2,
    name: "Crispy Devilled Prawns",
    description: "Spicy chili garlic batter",
    price: "LKR 1,800",
    category: "appetizers",
    isSpecial: true,
  },
  {
    id: 3,
    name: "Pan-Seared Seabass",
    description: "Local fish with pol sambol",
    price: "LKR 3,500",
    category: "mains",
  },
  {
    id: 4,
    name: "Passionfruit Mojito",
    description: "Fresh mint & passion fruit",
    price: "LKR 1,600",
    category: "drinks",
  },
  {
    id: 5,
    name: "Coconut Pannacotta",
    description: "Kithul treacle caramel",
    price: "LKR 1,400",
    category: "desserts",
  },
  {
    id: 6,
    name: "Catch of the Day",
    description: "Chef's fresh ocean selection",
    price: "Market",
    category: "specials",
    isSpecial: true,
  },

  // Starters
  {
    id: 7,
    name: "Seared Scallops",
    description: "Coconut cream & lime",
    price: "LKR 2,200",
    category: "appetizers",
  },
  {
    id: 8,
    name: "Mutton Rolls",
    description: "Spiced deep fried",
    price: "LKR 1,200",
    category: "appetizers",
  },
  {
    id: 9,
    name: "Calamari Rings",
    description: "Lemon aioli",
    price: "LKR 1,500",
    category: "appetizers",
  },

  // Mains
  {
    id: 10,
    name: "Coconut Crab Curry",
    description: "Rich Sri Lankan spices",
    price: "LKR 3,800",
    category: "mains",
  },
  {
    id: 11,
    name: "Tiger Prawns Thermidor",
    description: "Creamy baked cheese",
    price: "LKR 3,900",
    category: "mains",
  },
  {
    id: 12,
    name: "Beef Rendang",
    description: "Slow-cooked coconut",
    price: "LKR 3,200",
    category: "mains",
  },

  // Specials (more)
  {
    id: 13,
    name: "Black Pepper Crab",
    description: "Signature spicy sauce",
    price: "LKR 4,500",
    category: "specials",
  },

  // Drinks
  {
    id: 14,
    name: "Arrack Sour",
    description: "Local arrack cocktail",
    price: "LKR 1,800",
    category: "drinks",
  },
  {
    id: 15,
    name: "King Coconut",
    description: "Chilled refresher",
    price: "LKR 900",
    category: "drinks",
  },

  // Desserts
  {
    id: 16,
    name: "Chocolate Fondant",
    description: "Warm lava center",
    price: "LKR 1,600",
    category: "desserts",
    isSpecial: true,
  },
  {
    id: 17,
    name: "Watalappan",
    description: "Traditional custard",
    price: "LKR 1,200",
    category: "desserts",
  },
];

const categories = [
  { id: "featured", label: "All", icon: <Utensils size={20} /> },
  { id: "appetizers", label: "Starters", icon: <Soup size={20} /> },
  { id: "mains", label: "Mains", icon: <Fish size={20} /> },
  {
    id: "specials",
    label: "Specials",
    icon: <Star size={20} fill="currentColor" />,
  },
  { id: "drinks", label: "Drinks", icon: <Wine size={20} /> },
  { id: "desserts", label: "Desserts", icon: <CakeSlice size={20} /> },
];

export default function MenuPage() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState(
    categoryFromUrl || "featured",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  // URL change වෙනකොට category update වෙනවා
  useEffect(() => {
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  // Filtered items (category + search)
  const filteredItems = allMenuItems
    .filter((item) =>
      activeCategory === "featured" ? true : item.category === activeCategory,
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.price.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  const toggleExpand = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) newExpanded.delete(id);
    else newExpanded.add(id);
    setExpandedItems(newExpanded);
  };

  return (
    <main className="bg-black min-h-screen py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h1 className="mt-20 text-5xl md:text-7xl font-heading text-center gold-text mb-10 md:mb-12 tracking-wide">
          LaCascade Menu
        </h1>

        {/* Category Tabs - search bar එකට කලින් */}
        <div className="mb-10 sm:flex sm:items-center sm:justify-center overflow-x-auto pb-3 scrollbar-hide">
          <div className="flex space-x-2.5 md:space-x-4 min-w-max">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap
                  ${
                    activeCategory === cat.id
                      ? "bg-[var(--gold)] text-black shadow-lg shadow-gold/30"
                      : "bg-black/60 text-gold border border-gold/30 hover:bg-gold/10 hover:border-gold"
                  }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat.icon}
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold h-5 w-5" />
            <input
              type="text"
              placeholder="Search dishes, descriptions or prices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-black/60 border border-gold/30 rounded-2xl text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gold hover:text-gold-light"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Active Category Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl gold-text font-heading">
            {categories.find((c) => c.id === activeCategory)?.label ||
              "All Dishes"}
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            {filteredItems.length} items found
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Dish List */}
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-black/60 border border-gold/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-gold/20 transition-shadow"
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full p-6 text-left"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <h3 className="text-xl font-medium text-white group-hover:text-gold transition-colors">
                          {item.name}
                          {item.isSpecial && (
                            <span className="ml-2 text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">
                              Special
                            </span>
                          )}
                        </h3>
                        {expandedItems.has(item.id) && (
                          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col items-end min-w-[80px]">
                        <span className="text-gold font-bold text-xl">
                          {item.price}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-gold mt-2 transition-transform ${
                            expandedItems.has(item.id) ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <Utensils className="mx-auto text-gold h-16 w-16 mb-4 opacity-50" />
                <p className="text-xl text-gray-400">
                  No dishes found. Try another category or search.
                </p>
              </div>
            )}
          </div>
        </AnimatePresence>

        {/* Reserve Button /}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-10 py-5 bg-[var(--gold)] text-black font-bold rounded-full text-lg shadow-xl shadow-gold/30 hover:bg-gold-light transition-all"
          >
            Reserve Your Table
          </motion.button>
        </div>*/}
      </div>
    </main>
  );
}
