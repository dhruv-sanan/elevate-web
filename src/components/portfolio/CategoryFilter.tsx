"use client"

import { motion } from "framer-motion"
import { RestaurantCategory } from "./portfolioData"

interface CategoryFilterProps {
  categories: (RestaurantCategory | 'All')[];
  activeCategory: RestaurantCategory | 'All';
  onSelectCategory: (category: RestaurantCategory | 'All') => void;
}

export function CategoryFilter({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="sticky top-24 z-40 w-full py-4 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex overflow-x-auto pb-2 scrollbar-hide hide-scrollbar gap-2 md:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                activeCategory === category
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-emerald-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
