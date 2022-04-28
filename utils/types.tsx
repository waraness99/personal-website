import { IconType } from "react-icons";

export type ProjectPreviewProps = {
  name: string;
  date: string;
  shortDescription: string;
  primaryImage: string;
  technicalStack: string[];
};

export type ProjectImageProps = {
  name: string;
  url: string;
};

export type ProjectDetailProps = {
  longDescription: string;
  images: Array<ProjectImageProps>;
  websiteUrl: string;
  repositoryUrl: string;
  projectType: string;
};

export type ProjectProps = ProjectPreviewProps & ProjectDetailProps;

export type FunFactProps = {
  title: string;
  description: string;
  icon: IconType;
};
