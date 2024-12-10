import { ButtonProps } from '@/model/props';
import { SelectedPage } from '@/shared/SelectedPage';
import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';



const ActionButton: React.FunctionComponent<ButtonProps> = ({children, setSelectedPage}: ButtonProps) => {
  return (
    <AnchorLink 
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
        {children}
    </AnchorLink>
  )
};

export default ActionButton;
