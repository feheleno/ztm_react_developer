import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const IncreaseProductIcon = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faPlus} />
    </span>
  );
};

export const DecreaseProductIcon = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faMinus} />
    </span>
  );
};

export const RemoveProductIcon = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faXmark} />
    </span>
  );
};