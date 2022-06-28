import { useState } from "react";
import { useMutation } from "@apollo/client";

import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";

import { SEARCH_IMAGES } from "./queries";
import {
  HeaderWrapper,
  ResultItem,
  ResultsContainer,
  ResultsGrid,
  ResultsHeader,
} from "./styles";
import UploadImageModal from "../../components/UploadImageModal";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [searchImages, { loading, error }] = useMutation(SEARCH_IMAGES, {
    onCompleted: ({ searchImages }) => setSearchResults(searchImages),
    onError: (err) => console.error("Image search was unsuccessful", err),
  });

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const onSearch = () =>
    searchImages({
      variables: {
        imageName: searchTerm,
      },
    });

  return (
    <div>
      <HeaderWrapper>
        <SearchBar
          searchTerm={searchTerm}
          onChange={setSearchTerm}
          onSearch={onSearch}
        />
        <Button onClick={onOpenModal}>Upload</Button>
      </HeaderWrapper>
      {loading ? (
        <div className="loading-container" data-testid="loading-indicator">
          <img
            src={require("../../assets/images/loader.gif")}
            height={200}
            width={200}
            alt="loader"
          />
        </div>
      ) : null}
      {!loading && error ? (
        <div className="error-container">
          An error occurred. Please try again.
        </div>
      ) : null}
      {searchResults.length ? (
        <>
          <ResultsHeader>{searchResults.length} images</ResultsHeader>
          <ResultsContainer>
            <ResultsGrid>
              {searchResults.map((result) => {
                return (
                  <ResultItem key={result}>
                    <img
                      src={result}
                      height="400"
                      width="400"
                      alt="search-result"
                    />
                  </ResultItem>
                );
              })}
            </ResultsGrid>
          </ResultsContainer>
        </>
      ) : null}
      {openModal ? <UploadImageModal onClose={onCloseModal} /> : null}
    </div>
  );
};

export default SearchPage;
