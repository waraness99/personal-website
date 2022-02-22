import React from "react";
import type { NextPage } from "next";

import { Hero } from "./components/Hero.component";
import { EmploymentHistory } from "./components/EmploymentHistory/EmploymentHistory.component";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <EmploymentHistory />
    </>
  );
};
export default Home;
