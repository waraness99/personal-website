import React from "react";
import type { NextPage } from "next";

import { HomeHero } from "src/components/Home/HomeHero";
import { EmploymentHistory } from "src/components/Home/EmploymentHistory";
import { HomePitch } from "src/components/Home/HomePitch";
import { HomeFunFacts } from "src/components/Home/HomeFunFacts";

const Home: NextPage = () => {
  return (
    <>
      <HomeHero />
      <EmploymentHistory />
      <HomePitch />
      <HomeFunFacts />
    </>
  );
};
export default Home;
