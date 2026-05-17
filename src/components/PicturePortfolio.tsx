import type { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * Renders a <picture> with WebP source first and the original JPG/PNG as fallback.
 * Use for all portfolio images; WebP files live next to JPGs (see scripts/convert-webp.mjs).
 */
export default function PicturePortfolio({ src, alt, ...rest }: Props) {
  const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img src={src} alt={alt} {...rest} />
    </picture>
  );
}
