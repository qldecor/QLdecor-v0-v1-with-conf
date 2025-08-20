export const handlesMock = [
  {
    id: "or-020",
    name: "Handle OR-020",
    blurb: "Slim aluminum handle with a timeless profile.",
    finishes: ["gold", "black", "silver"],
    sizes: [320, 600, 1000],
    variants: [
      {
        size: 320,
        images: {
          gold: { primary: "/img/handles/or-020/or-020.webp", secondary: "/img/handles/or-020/or-020-secondary.webp" },
          black: { primary: "/img/handles/or020-320-black.jpg", secondary: "/img/handles/or020-320-black-2.jpg" },
          silver: { primary: "/img/handles/or020-320-silver.jpg", secondary: "/img/handles/or020-320-silver-2.jpg" },

        },
      },
      {
        size: 600,
        images: {
          gold: { primary: "/img/handles/or020-600-gold.jpg", secondary: "/img/handles/or020-600-gold-2.jpg" },
          black: { primary: "/img/handles/or020-600-black.jpg", secondary: "/img/handles/or020-600-black-2.jpg" },
          silver: { primary: "/img/handles/or020-600-silver.jpg", secondary: "/img/handles/or020-600-silver-2.jpg" },
        },
      },
    ],
  },
  {
    id: "or-021",
    name: "Handle OR-021",
    blurb: "Modern recessed handle with clean lines.",
    finishes: ["black", "silver", "gold"],
    sizes: [160, 320],
    variants: [
      {
        size: 160,
        images: {
          black: { primary: "/img/handles/or-021/or-021.webp", secondary: "/img/handles/or-021/or-021-secondary.webp" },
          silver: { primary: "/img/handles/or-021/or-021-silver.webp", secondary: "/img/handles/or021-160-silver-2.jpg" },
          gold: { primary: "/img/handles/or-021/or-021-gold.webp", secondary: "/img/handles/or-021/or-021-gold-secondary.webp" },
        },
      },
    ],
  },
  {
    id: "or-029",
    name: "Handle OR-029",
    blurb: "Elegant bar handle, versatile for kitchen and wardrobe.",
    finishes: ["gold", "black", "silver"],
    sizes: [128, 192, 320],
    variants: [
      {
        size: 128,
        images: {
          gold: { primary: "/img/handles/or029-128-gold.jpg", secondary: "/img/handles/or029-128-gold-2.jpg" },
          black: { primary: "/img/handles/or029-128-black.jpg", secondary: "/img/handles/or029-128-black-2.jpg" },
          silver: { primary: "/img/handles/or029-128-silver.jpg", secondary: "/img/handles/or029-128-silver-2.jpg" },
        },
      },
    ],
  },
  {
    id: "or-1119",
    name: "Knob OR-1119",
    blurb: "Compact round knob with timeless appeal.",
    finishes: ["gold", "black", "silver", "orange"],
    sizes: [30, 40],
    variants: [
      {
        size: 30,
        images: {
          gold: { primary: "/img/handles/or1119-30-gold.jpg", secondary: "/img/handles/or1119-30-gold-2.jpg" },
          black: { primary: "/img/handles/or1119-30-black.jpg", secondary: "/img/handles/or1119-30-black-2.jpg" },
          silver: { primary: "/img/handles/or1119-30-silver.jpg", secondary: "/img/handles/or1119-30-silver-2.jpg" },
          orange: { primary: "/img/handles/or1119-30-orange.jpg", secondary: "/img/handles/or1119-30-orange-2.jpg" },
        },
      },
    ],
  },
  {
    id: "or-8020",
    name: "Handle OR-8042",
    blurb: "Wide recessed profile for modern furniture.",
    finishes: ["black", "silver"],
    sizes: [200, 400],
    variants: [
      {
        size: 200,
        images: {
          black: { primary: "/img/handles/or-020/or-020.webp", secondary: "/img/handles/or8042-200-black-2.jpg" },
          silver: { primary: "/img/handles/or8042-200-silver.jpg", secondary: "/img/handles/or8042-200-silver-2.jpg" },
        },
      },
    ],
  },
]

export type Handle = (typeof handlesMock)[0]
export type HandleFinish = "gold" | "black" | "silver" | "orange"
export type HandleVariant = Handle["variants"][0]
