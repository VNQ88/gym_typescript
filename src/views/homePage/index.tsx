import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/SelectedPage";
import * as React from "react";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from "../../components/buttons/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

interface HomeProps {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home: React.FunctionComponent<HomeProps> = ({
  setSelectedPage,
}: HomeProps) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id={SelectedPage.Home}
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="md:flex mx-auto w-5/6 md:h-5/6 justify-center items-center"
      >
        {/* MAIN HEADER */}
        <div className="z-10 md:basis-3/5 mt-32">
          {/* HEADING */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Join VNQ gym for top-notch facilities, expert trainers, and
              diverse workouts. Achieve your fitness goals in a vibrant,
              supportive community. Start your journey to a healthier you
              today!. Book now.
            </p>
          </motion.div>

          {/* ACTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn more
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </motion.div>

      {/* SPONSOR */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex justify-between items-center w-3/5 gap-8">
              <img src={SponsorRedBull} alt="sponsor-redbull" />
              <img src={SponsorForbes} alt="sponsor-forbes" />
              <img src={SponsorFortune} alt="sponsor-fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
