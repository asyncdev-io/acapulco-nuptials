import { FC } from "react";

interface ISectionTitleProps {
  title: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({ title }) => {
  return (
    <h2
      className={
        "noto-serif capitalize w-full text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl my-2 md:my-4 lg:my-8 text-brown"
      }
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
