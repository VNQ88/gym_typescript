import * as React from "react";

interface IHTextProps {
  children: React.ReactNode;
  className: string;
}

const HText: React.FunctionComponent<IHTextProps> = ({
  children,
  className,
}) => {
  return (
    <h1 className={`basis-3/5 font-montserrat text-3xl font-bold ${className}`}>
      {children}
    </h1>
  );
};

export default HText;
