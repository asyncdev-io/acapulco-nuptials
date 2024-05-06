import menu from "@/public/img/menu.jpg";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

// Estos textos no cambian, vienen de parte de la empresa y son estáticos.
const Menu = () => {
  return (
    <SectionContainer id="menu">
      <SectionTitle title="Menú" />
      <div className="flex flex-col items-center space-y-4 md:flex-row w-full h-[300px] justify-between md:space-x-4 p-4">
        <p className="w-full self-center text-base md:text-2xl">
          La experiencia hace al maestro:{" "}
          <span className="text-brown">Acapulco Nuptials</span> sabe como
          diseñar menús que excedan las expectativas, a gusto de los agasajados,
          y que respondan a cualquier necesidad culinaria.
        </p>
        <div className="w-full relative h-[300px]">
          <Image
            alt=""
            src={menu}
            fill
            className={"object-cover rounded-2xl"}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Menu;
