import Image, { StaticImageData } from "next/image";

const ImageCover = ({
  src,
  alt = "",
}: {
  src: StaticImageData;
  alt?: string;
}) => {
  return (
    <div className="h-full w-screen absolute overflow-hidden inset-0 -z-10">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover md:object-top"
        style={{ filter: "blur" }}
      />
    </div>
  );
};

export default ImageCover;
