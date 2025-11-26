import { gridItems } from "@/constants";
import { BentoGrid, BentoGridItem } from "../ui/bentoGrid";

const About = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            img={item.img}
            description={item.description}
            className={item.className}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
