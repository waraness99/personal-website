import React from "react";
import type { NextPage } from "next";

import { HomeHero } from "src/components/Heroes/HomeHero.component";
import { EmploymentHistory } from "../../components/EmploymentHistory/EmploymentHistory.component";

const Home: NextPage = () => {
  return (
    <>
      <HomeHero />
      <EmploymentHistory />
    </>
  );
};
export default Home;
