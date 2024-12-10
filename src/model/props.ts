import { SelectedPage } from "@/shared/SelectedPage";
import React from "react";

export interface ButtonProps{
    children: React.ReactNode,
    setSelectedPage: (value: SelectedPage) => void
}

export interface NavbarProps{
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}