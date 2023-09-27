import "./style.scss";

export interface CustomizedButtonProps {
  onClick?: () => void;
  buttonText?: string;
}

function CustomizedButton(props: CustomizedButtonProps) {
  return (
    <div>
      <button className="MyButton" onClick={props.onClick}>
        {props.buttonText || "Press"}
      </button>
    </div>
  );
}

export default CustomizedButton;
