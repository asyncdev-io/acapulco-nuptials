import roses from "@/public/img/flowers.png";
import Image from "next/image";
import { FC } from "react";

interface ISectionContainerProps {
  id: string;
  children: React.ReactNode;
}

const SectionContainer: FC<ISectionContainerProps> = ({ id, children }) => {
  return (
    <section id={id} className="w-full bg-beige">
      <div className="px-4 sm:px-6 lg:px-8 py-4 md:py-8 lg:py-12 container mx-auto">
        <div className="w-full flex justify-center">
          <Image src={roses} alt="Acapulco Nuptials" width={400} height={60} />
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
