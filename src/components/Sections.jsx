import data from "../assets/data.json";
import Section from "./Section";

const Sections = (props) => {
  return (
    <div className="sections">
      {data.map((elem, index) => {
        return (
          <Section key={index} title={elem.category} images={elem.images} />
        );
      })}
    </div>
  );
};

export default Sections;
