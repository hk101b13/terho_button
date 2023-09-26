declare module "terho-new-button-2" {
  import React from "react";

  export interface TerhoButtonProps {
    onClick?: () => void;
  }

  const TerhoButton: React.FC<TerhoButtonProps>;
  export default TerhoButton;
}
