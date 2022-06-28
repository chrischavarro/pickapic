import StyledInput from "./styles";

const Input = ({
  onChange,
  value,
  placeholder,
}: {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      data-testid="input"
    />
  );
};

export default Input;
