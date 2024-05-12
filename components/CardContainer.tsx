"use client";
import { Card } from "./Card";
import SectionContainer from "./SectionContainer";
import { serviceImages } from "@/app/data/service-images";
import Image from "next/image";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-10 py-16 bg-beige">
      {serviceImages.map((el, idx: number) => (
        <Card key={idx} className="rounded-[22px] bg-white">
          <div className="w-full h-full bg-gradient-to-t from-brown absolute z-30 rounded-[22px]" />
          <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200 absolute z-40 bottom-0 p-2 text-beige">
            {el.text}
          </p>
          <Image
            src={el.img}
            alt="service"
            height={400}
            width={400}
            className="object-cover rounded-[22px]"
          />
        </Card>
      ))}
    </div>
  );
};

export default CardContainer;
