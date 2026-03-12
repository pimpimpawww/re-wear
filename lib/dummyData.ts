// Dummy data untuk RE WEAR - Sustainable Fashion Marketplace

export const dummyProducts = [
  {
    id: 1,
    seller_id: "user1",
    title: "Vintage Leather Crossbody Bag",
    price: 355000,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "bags",
    brand: "Zara",
    condition: "like-new",
    size: "Medium",
    color: "Brown",
    material: "Genuine Leather",
    description: "Beautiful vintage leather crossbody bag in excellent condition. Perfect for daily use. Minimal signs of wear.",
    status: "active" as const,
    likes_count: 24,
    views_count: 156,
    created_at: "2024-03-10T10:00:00Z",
    updated_at: "2024-03-10T10:00:00Z",
    seller: {
      id: "user1",
      username: "sarahjfashion",
      full_name: "Sarah Johnson"
    }
  },
  {
    id: 2,
    seller_id: "user2",
    title: "Oversized Denim Jacket",
    price: 280000,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "outerwear",
    brand: "Levi's",
    condition: "good",
    size: "L",
    color: "Light Blue",
    material: "100% Cotton Denim",
    description: "Classic oversized denim jacket. Vintage wash. Perfect for layering. Slightly faded for that authentic vintage look.",
    status: "active" as const,
    likes_count: 18,
    views_count: 98,
    created_at: "2024-03-09T14:30:00Z",
    updated_at: "2024-03-09T14:30:00Z",
    seller: {
      id: "user2",
      username: "emmastyle",
      full_name: "Emma Wilson"
    }
  },
  {
    id: 3,
    seller_id: "user3",
    title: "White Canvas Sneakers",
    price: 320000,
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "footwear",
    brand: "Converse",
    condition: "like-new",
    size: "38",
    color: "White",
    material: "Canvas",
    description: "Classic white canvas sneakers. Barely worn, in excellent condition. Perfect for casual everyday wear.",
    status: "active" as const,
    likes_count: 32,
    views_count: 210,
    created_at: "2024-03-08T09:15:00Z",
    updated_at: "2024-03-08T09:15:00Z",
    seller: {
      id: "user3",
      username: "lisap",
      full_name: "Lisa Park"
    }
  },
  {
    id: 4,
    seller_id: "user4",
    title: "Floral Maxi Dress",
    price: 245000,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "dresses",
    brand: "H&M",
    condition: "like-new",
    size: "M",
    color: "Floral Print",
    material: "Polyester",
    description: "Beautiful floral maxi dress perfect for summer. Flowy and comfortable. Worn only twice.",
    status: "active" as const,
    likes_count: 15,
    views_count: 87,
    created_at: "2024-03-07T16:45:00Z",
    updated_at: "2024-03-07T16:45:00Z",
    seller: {
      id: "user4",
      username: "mariag",
      full_name: "Maria Garcia"
    }
  },
  {
    id: 5,
    seller_id: "user5",
    title: "Black Leather Ankle Boots",
    price: 450000,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "footwear",
    brand: "Aldo",
    condition: "good",
    size: "39",
    color: "Black",
    material: "Genuine Leather",
    description: "Stylish black leather ankle boots with block heel. Some wear on soles but overall great condition.",
    status: "active" as const,
    likes_count: 28,
    views_count: 145,
    created_at: "2024-03-06T11:20:00Z",
    updated_at: "2024-03-06T11:20:00Z",
    seller: {
      id: "user5",
      username: "sophiec",
      full_name: "Sophie Chen"
    }
  },
  {
    id: 6,
    seller_id: "user6",
    title: "Striped Cotton T-Shirt",
    price: 85000,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "tops",
    brand: "Uniqlo",
    condition: "like-new",
    size: "S",
    color: "Navy & White",
    material: "100% Cotton",
    description: "Classic striped cotton t-shirt. Soft and comfortable. Perfect basic piece for any wardrobe.",
    status: "active" as const,
    likes_count: 12,
    views_count: 65,
    created_at: "2024-03-05T13:00:00Z",
    updated_at: "2024-03-05T13:00:00Z",
    seller: {
      id: "user6",
      username: "annalee",
      full_name: "Anna Lee"
    }
  },
  {
    id: 7,
    seller_id: "user7",
    title: "High-Waisted Mom Jeans",
    price: 195000,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "bottoms",
    brand: "Pull&Bear",
    condition: "good",
    size: "28",
    color: "Light Wash",
    material: "Denim",
    description: "Trendy high-waisted mom jeans. Comfortable fit with vintage wash. Perfect for casual looks.",
    status: "active" as const,
    likes_count: 21,
    views_count: 112,
    created_at: "2024-03-04T08:30:00Z",
    updated_at: "2024-03-04T08:30:00Z",
    seller: {
      id: "user7",
      username: "jessb",
      full_name: "Jessica Brown"
    }
  },
  {
    id: 8,
    seller_id: "user8",
    title: "Wool Blend Coat",
    price: 580000,
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "outerwear",
    brand: "Mango",
    condition: "like-new",
    size: "M",
    color: "Camel",
    material: "70% Wool, 30% Polyester",
    description: "Elegant wool blend coat perfect for cooler weather. Classic camel color goes with everything.",
    status: "active" as const,
    likes_count: 35,
    views_count: 189,
    created_at: "2024-03-03T15:10:00Z",
    updated_at: "2024-03-03T15:10:00Z",
    seller: {
      id: "user8",
      username: "rachelk",
      full_name: "Rachel Kim"
    }
  },
  {
    id: 9,
    seller_id: "user9",
    title: "Silk Scarf",
    price: 125000,
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "accessories",
    brand: "Zara",
    condition: "like-new",
    size: "One Size",
    color: "Multicolor",
    material: "100% Silk",
    description: "Luxurious silk scarf with beautiful print. Can be worn multiple ways. Like new condition.",
    status: "active" as const,
    likes_count: 9,
    views_count: 54,
    created_at: "2024-03-02T12:40:00Z",
    updated_at: "2024-03-02T12:40:00Z",
    seller: {
      id: "user9",
      username: "oliviat",
      full_name: "Olivia Taylor"
    }
  },
  {
    id: 10,
    seller_id: "user10",
    title: "Knit Cardigan",
    price: 165000,
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "tops",
    brand: "Gap",
    condition: "good",
    size: "M",
    color: "Beige",
    material: "Acrylic Knit",
    description: "Cozy knit cardigan perfect for layering. Soft and warm. Some minor pilling but overall good condition.",
    status: "active" as const,
    likes_count: 14,
    views_count: 76,
    created_at: "2024-03-01T10:25:00Z",
    updated_at: "2024-03-01T10:25:00Z",
    seller: {
      id: "user10",
      username: "hannaw",
      full_name: "Hannah White"
    }
  },
  {
    id: 11,
    seller_id: "user11",
    title: "Pleated Midi Skirt",
    price: 175000,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "bottoms",
    brand: "Zara",
    condition: "like-new",
    size: "S",
    color: "Black",
    material: "Polyester",
    description: "Elegant pleated midi skirt. Perfect for office or special occasions. Barely worn.",
    status: "active" as const,
    likes_count: 19,
    views_count: 103,
    created_at: "2024-02-29T14:50:00Z",
    updated_at: "2024-02-29T14:50:00Z",
    seller: {
      id: "user11",
      username: "gracem",
      full_name: "Grace Miller"
    }
  },
  {
    id: 12,
    seller_id: "user12",
    title: "Leather Tote Bag",
    price: 425000,
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=500&h=500&fit=crop"
    ],
    category: "woman",
    subcategory: "bags",
    brand: "Coach",
    condition: "good",
    size: "Large",
    color: "Tan",
    material: "Genuine Leather",
    description: "Spacious leather tote bag perfect for work or travel. Shows some wear but still very functional.",
    status: "active" as const,
    likes_count: 27,
    views_count: 134,
    created_at: "2024-02-28T09:05:00Z",
    updated_at: "2024-02-28T09:05:00Z",
    seller: {
      id: "user12",
      username: "victoriaa",
      full_name: "Victoria Adams"
    }
  }
];

export const trendingProducts = dummyProducts.slice(0, 8).map(p => ({
  ...p,
  likes_count: p.likes_count + 10 // Trending items have more likes
}));
