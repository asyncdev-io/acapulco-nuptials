import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

// Estos textos no cambian, vienen de parte de la empresa y son estáticos.
const Services = () => {
  return (
    <SectionContainer id="services">
      <SectionTitle title="Servicios" />
      <p>
        Banquetería personalizada con opción Kosher Bebidas, vinos y licores
        Renta de Mobiliario y montaje de vanguardia Decoracione Renta de Menaje,
        vajilla, loza y material Planeación, organización y coordinación Renta
        de pistas de baile y Equipo de Dj
      </p>
    </SectionContainer>
  );
};

export default Services;
