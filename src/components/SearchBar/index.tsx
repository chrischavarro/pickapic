import { FetchResult } from "@apollo/client";

import Button from "../Button";
import SearchBarWrapper from "./styles";
import Input from "../Input";

const SearchBar = ({
  onSearch,
  onChange,
  searchTerm,
}: {
  onSearch: () => Promise<
    FetchResult<any, Record<string, any>, Record<string, any>>
  >;
  searchTerm: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <SearchBarWrapper>
      <Input
        placeholder="Search images..."
        onChange={onChange}
        value={searchTerm}
      />
      <Button onClick={onSearch}>Search</Button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
