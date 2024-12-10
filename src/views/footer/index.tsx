import * as React from "react";
import Logo from "@/assets/Logo.png";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="gap-16 w-5/6 basis-1/2 md:flex mx-auto">
        <div className="md:w-3/5">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Link</h4>
            <p className="mt-5">Massa orci senectus</p>
            <p className="mt-5">Et gravida id et etiam</p>
            <p className="mt-5">Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="mt-5">Tempus metus mattis risus volutpat</p>
            <p className="mt-5">(333)425-6285</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
