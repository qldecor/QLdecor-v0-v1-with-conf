// types/handles.ts
export type HandleFinish = "gold" | "black" | "silver" | "orange";

export type I18nText = { en: string; pl: string };

export type HandleIndexItem = {
  id: string;
  slug: string;
  name: I18nText;
  blurb: I18nText;
  defaultVariant: { finish: HandleFinish; size: string };
  covers: { thumb: string; hover?: string };
  finishes: HandleFinish[];
  sizes: string[];
};

export type HandlesIndex = {
  collection: "handles";
  items: HandleIndexItem[];
};

export type HandleVariant = {
  sku: string;
  options: { finish: HandleFinish; size: string };
  images: { primary: string; secondary?: string };
  lengthMM?: number;
  price?: number | null;
  stock?: number | null;
};

export type ProductOption =
  | {
      id: "finish";
      name: I18nText;
      type: "swatch";
      values: { id: HandleFinish; label: I18nText }[];
    }
  | {
      id: "size";
      name: I18nText;
      type: "segmented";
      unit: "mm";
      values: { id: string; label: I18nText }[];
    };

export type HandleProduct = {
  id: string;
  slug: string;
  name: I18nText;
  blurb: I18nText;
  profile?: "edge" | "bar" | "recessed";
  material?: "aluminum" | "steel";
  centerToCenter?: number[];
  options: ProductOption[];
  variants: HandleVariant[];
  seo?: { title?: I18nText; description?: I18nText };
};

export type HandlesApiResponse = { items: HandleIndexItem[] };

export const imagePath = {
  primary: (slug: string, size: string, finish: HandleFinish) =>
    `/img/handles/${slug}/${slug}-${size}-${finish}.webp`,
  hover: (slug: string, size: string, finish: HandleFinish) =>
    `/img/handles/${slug}/${slug}-${size}-${finish}-2.webp`,
};
