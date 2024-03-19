import Title from "./Title";
import Image from "./Image";

const Section = (props) => {
  console.log(props);
  return (
    <div className="section">
      <Title title={props.title} />
      <div className="images">
        {props.images.map((elem, index) => {
          return <Image key={index} src={elem} className="image" />;
        })}
      </div>
    </div>
  );
};

export default Section;
