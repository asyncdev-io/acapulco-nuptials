import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

// Estos textos no cambian, vienen de parte de la empresa y son estáticos.
const AboutUs = () => {
  return (
    <SectionContainer id="about-us">
      <SectionTitle title="Nosotros" />
      <p>
        Acapulco Nuptials sabe que todos los eventos son únicos e irrepetibles,
        es por ello que para poder ofrecer a sus clientes la máxima calidad, es
        que esta conformada por un selecto grupo de profesionales en cada una de
        las especialidades necesarias para la ejecución de un evento social.
      </p>
    </SectionContainer>
  );
};

export default AboutUs;
