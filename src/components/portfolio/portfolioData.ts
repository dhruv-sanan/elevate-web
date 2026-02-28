export type RestaurantCategory = 'Restaurants' | 'Cafes' | 'Bakeries' | 'Hotels';

export interface PortfolioItem {
  id: string;
  name: string;
  city: string;
  category: RestaurantCategory;
  tagline: string;
  metrics: {
    ordersIncrease: string;
    revenueIncrease: string;
    rating: number;
  };
  testimonial: {
    quote: string;
    owner: string;
  };
  imageUrl: string;
  color: string; // Tailwind color class for accents
  demoUrl?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "shreeji-thali",
    name: "Shreeji Thali House",
    city: "Ahmedabad",
    category: "Restaurants",
    tagline: "Authentic Gujarati Thali Experience",
    metrics: {
      ordersIncrease: "+230%",
      revenueIncrease: "₹3.2L/mo",
      rating: 4.9,
    },
    testimonial: {
      quote: "Moving away from aggregators was the best decision. Our regular customers now order directly through our web app, saving us thousands in commissions every month.",
      owner: "Rahul Patel",
    },
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "chai-crust",
    name: "The Chai & Crust Cafe",
    city: "Surat",
    category: "Cafes",
    tagline: "Modern Cafe & Brunch Spot",
    metrics: {
      ordersIncrease: "+180%",
      revenueIncrease: "₹1.8L/mo",
      rating: 4.8,
    },
    testimonial: {
      quote: "The QR table ordering has completely transformed our dine-in experience. Less waiting time for customers and faster table turnovers for us.",
      owner: "Neha Shah",
    },
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "mithai-palace",
    name: "Mithai Palace",
    city: "Ahmedabad",
    category: "Bakeries",
    tagline: "Traditional Sweets & Modern Bakery",
    metrics: {
      ordersIncrease: "+310%",
      revenueIncrease: "₹4.5L/mo",
      rating: 4.9,
    },
    testimonial: {
      quote: "During Diwali, the custom pre-order system handled over 500 orders without a single hiccup. The WhatsApp confirmations build immense trust with our clients.",
      owner: "Karan Desai",
    },
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "rann-heritage",
    name: "Rann Heritage Resort",
    city: "Bhuj",
    category: "Hotels",
    tagline: "Royal Stay & Dining",
    metrics: {
      ordersIncrease: "+150%",
      revenueIncrease: "₹5.1L/mo",
      rating: 4.7,
    },
    testimonial: {
      quote: "Our guests love the convenience of ordering room service directly from their phones. It's premium, fast, and exactly what our heritage property needed.",
      owner: "Vikramsinh Jadeja",
    },
    imageUrl: "/ram-heritage.png",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "kathiyawadi-rasoi",
    name: "Kathiyawadi Rasoi",
    city: "Rajkot",
    category: "Restaurants",
    tagline: "Pure Kathiyawadi Flavors",
    metrics: {
      ordersIncrease: "+210%",
      revenueIncrease: "₹2.8L/mo",
      rating: 4.8,
    },
    testimonial: {
      quote: "The automated Google reviews feature pushed our rating from 4.1 to 4.8 in just two months. We're seeing more footfall than ever before.",
      owner: "Sanjay Dave",
    },
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "oven-stories",
    name: "Oven Stories",
    city: "Surat",
    category: "Bakeries",
    tagline: "Artisan Bread & Custom Cakes",
    metrics: {
      ordersIncrease: "+195%",
      revenueIncrease: "₹2.2L/mo",
      rating: 4.9,
    },
    testimonial: {
      quote: "Managing custom cake enquiries used to be a mess. Now, the dedicated enquiry form with WhatsApp integration makes closing sales effortless.",
      owner: "Priya Mehta",
    },
    imageUrl: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=800",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    id: "brew-culture",
    name: "Brew Culture",
    city: "Gandhinagar",
    category: "Cafes",
    tagline: "Specialty Coffee Roasters",
    metrics: {
      ordersIncrease: "+220%",
      revenueIncrease: "₹1.5L/mo",
      rating: 4.8,
    },
    testimonial: {
      quote: "The 3D web app vibe perfectly matches our physical aesthetic. It looks incredibly premium on mobile, which is where 90% of our customers find us.",
      owner: "Aditya Mistry",
    },
    imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "tulsi-garden",
    name: "Tulsi Garden",
    city: "Vadodara",
    category: "Restaurants",
    tagline: "Premium Multi-Cuisine Dining",
    metrics: {
      ordersIncrease: "+175%",
      revenueIncrease: "₹4.1L/mo",
      rating: 4.7,
    },
    testimonial: {
      quote: "Zero commission means we can pass on the discounts directly to our loyal customers. Our direct online orders have tripled since launch.",
      owner: "Jignesh Thakkar",
    },
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
    color: "from-cyan-500 to-blue-500",
  }
];
