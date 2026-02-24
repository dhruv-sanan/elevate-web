"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { portfolioData, RestaurantCategory } from "./portfolioData"
import { CategoryFilter } from "./CategoryFilter"
import { RestaurantCard } from "./RestaurantCard"

const categories: (RestaurantCategory | 'All')[] = ['All', 'Restaurants', 'Cafes', 'Bakeries', 'Hotels']

export function RestaurantShowcase() {
  const [activeCategory, setActiveCategory] = useState<RestaurantCategory | 'All'>('All')

  const filteredData = portfolioData.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  )

  return (
    <section className="py-20 bg-white dark:bg-[#0F172A] relative min-h-screen">
      <CategoryFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />

      <div className="container mx-auto px-4 md:px-6 pt-12">
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <RestaurantCard item={item} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredData.length === 0 && (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            No portfolio items found for this category.
          </div>
        )}
      </div>
    </section>
  )
}
