import {
  product1Image,
  product1Thumbnail,
  product2Image,
  product2Thumbnail,
  product3Image,
  product3Thumbnail,
  product4Image,
  product4Thumbnail,
} from "../assets";

export const navigation = [
  { id: "1", title: "Collections", url: "/collections" },
  { id: "2", title: "Men", url: "/men-page" },
  { id: "3", title: "Women", url: "/women-page" },
  { id: "4", title: "About", url: "/about" },
  { id: "5", title: "Contact", url: "/contact" },
];

export const images = [
  { id: "1", largeImage: product1Image, smallImage: product1Thumbnail },
  { id: "2", largeImage: product2Image, smallImage: product2Thumbnail },
  { id: "3", largeImage: product3Image, smallImage: product3Thumbnail },
  { id: "4", largeImage: product4Image, smallImage: product4Thumbnail },
];
