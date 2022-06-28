import { gql } from "@apollo/client";

export const SEARCH_IMAGES = gql`
  mutation SearchImages($imageName: String!) {
    searchImages(imageName: $imageName)
  }
`;
