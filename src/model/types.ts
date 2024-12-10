import { SelectedPage } from "@/shared/SelectedPage";
import React from "react";

export interface LinkNavbar {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children?: React.ReactNode;
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
