import { ReactNode } from "react";
import ButtonWrapper from "./styles";

const Button = ({
  children,
  onClick,
  noMargin,
  testId,
}: {
  children: ReactNode;
  onClick: () => void;
  noMargin?: boolean;
  testId?: string;
}) => {
  return (
    <ButtonWrapper noMargin={noMargin} onClick={onClick} data-testid={testId}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
