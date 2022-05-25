import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        authors
        description
        title
        bookId
        image
        link
      }
    }
  }
`;

export const QUERY_BOOKS = gql`
  query books($id: ID!) {
    books(_id: $id) {
      _id
      bookId
      authors
      description
      image
      link
      title
    }
  }
`;
