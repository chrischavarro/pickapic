import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import "./App.css";
import SearchPage from "./containers/SearchPage";

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:4000/graphql",
    headers: {
      "Apollo-Require-preflight": "true",
    },
  }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <SearchPage />
    </ApolloProvider>
  );
}

export default App;
