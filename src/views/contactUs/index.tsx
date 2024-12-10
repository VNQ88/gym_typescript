import HText from "@/components/Text/HText";
import { SelectedPage } from "@/shared/SelectedPage";
import { motion } from "framer-motion";
import * as React from "react";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

interface IContactUsProps {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs: React.FunctionComponent<IContactUsProps> = ({
  setSelectedPage,
}: IContactUsProps) => {
  const inputStyles = `mb-5 w-full bg-primary-300 placeholder-white rounded-lg px-5 py-3 `;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5 text-justify items-center justify-center"
        >
          <HText className="">
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            A gym is more than a place for workouts; it’s a gateway to a
            healthier lifestyle. With advanced equipment, diverse classes, and
            expert trainers, gyms help you achieve fitness goals, reduce stress,
            and boost energy while improving mental and physical well-being.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="md:flex gap-8 items-center justify-between mt-10">
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
          }}
          className="md:w-3/5 basis-3/5 md:mt-0">
            <form
              target="_blank"
              action="https://formsubmit.co/vnq2k3@email.com"
              method="POST"
              onSubmit={onSubmit}
            >
              {errors.name && (
                <p className="text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}
              <input
                className={inputStyles}
                placeholder="NAME"
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.name && (
                <p className="text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "pattern" && "Invalid email format!"}
                </p>
              )}
              <input
                className={inputStyles}
                placeholder="EMAIL"
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                })}
              />

              {errors.name && (
                <p className="text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />

              <button
                type="submit"
                className="bg-secondary-500 px-20 py-3 rounded-md transition duration-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* IMAGE */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: 50},
            visible: {opacity: 1, x: 0}
          }}
          className="relative mt-16 basis-2/5 md:mt-0">
            <div className="before:absolute before:-bottom-20 before:-right-10 w-full md:before:content-evolvetext before:z-[-1] before:">
              <img className="w-full" src={ContactUsPageGraphic} alt="contactus-page-graphic" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
