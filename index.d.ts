declare module "customized-module" {
  import React from "react";

  export interface CustomizedButtonProps {
    onClick?: () => void;
    buttonText?: string;
  }

  export interface CustomizedCowsayProps {
    content?: string;
  }

  const CustomizedButton: React.FC<CustomizedButtonProps>;
  const CustomizedCowsay: React.FC<CustomizedCowsayProps>;
  export { CustomizedButton, CustomizedCowsay };
}
