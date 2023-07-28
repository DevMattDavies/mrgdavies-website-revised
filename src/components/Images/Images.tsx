import Image, { StaticImageData } from "next/image";
import { useIsDevice } from "@/hooks";

type ImageProps = {
  src: StaticImageData | string;
  alt: string;
};
export const SectionImage = ({ src, alt }: ImageProps): JSX.Element => {
  const { isTablet, isDesktop } = useIsDevice();

  let imageWidth = "12rem";
  let imageHeight = "auto";
  let imageBorder = "1px solid white";

  if (isTablet) {
    imageWidth = "18rem";
    imageHeight = "25rem";
    imageBorder = "2px solid white";
  } else if (isDesktop) {
    imageWidth = "15rem";
    imageHeight = "auto";
    imageBorder = "2px solid white";
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={1000}
      style={{
        width: imageWidth,
        height: imageHeight,
        display: "block",
        border: imageBorder,
      }}
      priority
    />
  );
};

export const BlogImage = ({ src, alt }: ImageProps): JSX.Element => {
  return (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={1000}
      style={{
        width: "auto",
        height: "10rem",
        display: "block",
      }}
      priority
    />
  );
};
