import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import Card from "../Card";

const TechsList = () => {
  const { techs } = useContext(UserContext);

  return (
    <>
      {techs.map((tech) => (
        <Card key={tech.id} tech={tech} />
      ))}
    </>
  );
};

export default TechsList;
