// import { useEffect } from "react";
import Hero from "./Hero";
// import { useGlobalContext } from "./context";
import Menbers from "./Menbers";
import Counrts from "./Counrts";
import Stories from "../components/Stories";
import { About } from "../components";

const Home = () => {
  //   const { updateHomePage } = useGlobalContext();

  //   useEffect(() => updateHomePage(), []);

  return (
    <>
      <Hero />
      <Menbers />
      <Counrts />
      <About />
      <Stories />
    </>
  );
};

export default Home;
