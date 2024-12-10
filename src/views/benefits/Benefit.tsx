import { SelectedPage } from "@/shared/SelectedPage";
import { motion } from "framer-motion";
import * as React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface IBenefitProps {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit: React.FunctionComponent<IBenefitProps> = ({
  icon,
  title,
  description,
  setSelectedPage,
}) => {
  return (
    <motion.div
    variants={childVariant} className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        className="text-sm font-bold text-primary-500 hover:text-secondary-500 underline"
      >
        <p>Learn more</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
