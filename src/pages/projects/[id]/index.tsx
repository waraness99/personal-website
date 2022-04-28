import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ProjectPage } from "src/components/Project/ProjectDetail";

const ProjectDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (id === undefined) {
    // TODO loading
    return <></>;
  }
  return <ProjectPage id={id} />;
};
export default ProjectDetail;
