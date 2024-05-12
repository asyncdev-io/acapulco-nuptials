import roses from "@/public/img/flowers.png";
import Image from "next/image";
import { FC, forwardRef } from "react";

interface ISectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
}

// Convert to a forward ref component
const SectionContainer = forwardRef<HTMLElement, ISectionContainerProps>(
  ({ id, children, ...props }, ref) => {
    return (
      <section id={id} className="w-full bg-beige" ref={ref} {...props}>
        <div className="px-4 sm:px-6 lg:px-8 py-4 md:py-8 lg:py-12 container mx-auto">
          <div className="w-full flex justify-center">
            <Image
              src={roses}
              alt="Acapulco Nuptials"
              width={400}
              height={60}
            />
          </div>
          {children}
        </div>
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
