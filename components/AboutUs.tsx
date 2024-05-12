import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import { TextGenerativeEffect } from "./TextGenerativeEffect";

const words = `Acapulco Nuptials sabe que todos los eventos son únicos e irrepetibles,
es por ello que para poder ofrecer a sus clientes la máxima calidad, es
que esta conformada por un selecto grupo de profesionales en cada una de
las especialidades necesarias para la ejecución de un evento social.`;

const AboutUs = () => {
  return (
    <SectionContainer id="about-us">
      <SectionTitle title="NOSOTROS" />
      <TextGenerativeEffect words={words} />
    </SectionContainer>
  );
};

export default AboutUs;
