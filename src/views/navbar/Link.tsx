import { LinkNavbar } from "@/model/types";
import { SelectedPage } from "@/shared/SelectedPage";
import * as React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link: React.FunctionComponent<LinkNavbar> = ({
  page,
  selectedPage,
  setSelectedPage,
}: LinkNavbar) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
    transition duration-300 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
