import StyledInput from "./styles";

const Input = ({
  onChange,
  value,
  placeholder,
  onEnter,
}: {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  onEnter?: () => void;
}) => {
  const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      onEnter();
    }
  };

  return (
    <StyledInput
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      data-testid="input"
      onKeyDown={onSubmit}
    />
  );
};

export default Input;
