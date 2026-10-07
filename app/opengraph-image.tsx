import { homeImage, ogSize } from "@/lib/og";
import { site } from "@/lib/data";

export const alt = site.name;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return homeImage();
}
