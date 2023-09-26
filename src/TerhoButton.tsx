import "./style.scss";

export interface TerhoButtonProps {
  onClick?: () => void;
}

export default function TerhoButton(props: TerhoButtonProps) {
  return (
    <button className="MyButton" onClick={props.onClick}>
      TerhoButton
    </button>
  );
}
