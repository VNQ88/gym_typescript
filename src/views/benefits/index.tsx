import { SelectedPage } from "@/shared/SelectedPage";
import * as React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenifitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { motion } from "framer-motion";
import HText from "@/components/Text/HText";
import Benefit from "./Benefit";
import { BenefitType } from "@/model/types";
import ActionButton from "../../components/buttons/ActionButton";

interface IBenefitsProps {
  setSelectedPage: (value: SelectedPage) => void;
}

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Working out is not about being better than someone else. ",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Working out is not about being better than someone else. ",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Working out is not about being better than someone else. ",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits: React.FunctionComponent<IBenefitsProps> = ({
  setSelectedPage,
}) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5 md:my-5"
        >
          <HText className="">MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm ">
            Transform your fitness journey with VNQ gym! Explore top-tier
            equipment, expert coaching, and a variety of classes tailored to
            your goals. Join a supportive community committed to health and
            wellness. Your best self starts here—sign up today!
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ container }}
          className="md:flex justify-between gap-8 items-center mt-5"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 md:flex md:mt-28 items-center justify-between gap-20">
          {/* GRAPHIC */}
          <div className="mx-auto">
            <img src={BenifitsPageGraphic} alt="benifits-page-graphic" />
          </div>

          {/* DESCRIPTION */}
          <div className="mt-5 md:w-2/5">
            {/* TITLE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative"
            >
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <HText className="">
                  MILLIONS OF HAPPY MEMBERS GETTING {" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </div>
            </motion.div>

            {/* PARAGRAPHS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-justify"
            >
              <p className="my-5">
                A gym is more than a place for workouts; it’s a gateway to a
                healthier lifestyle. With advanced equipment, diverse classes,
                and expert trainers, gyms help you achieve fitness goals, reduce
                stress, and boost energy while improving mental and physical
                well-being.
              </p>
              <p className="mb-16">
                Gyms also foster community and motivation through group classes
                and personal connections. Professional trainers ensure safe and
                effective workouts, helping you build strength, confidence, and
                a positive mindset.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative">
              <div className="before:absolute before:right-40 before:-bottom-20 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
