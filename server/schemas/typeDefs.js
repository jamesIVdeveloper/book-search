const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: String
    description: String
    image: String
    link: String
    title: String
  }

  type Query {
    me: User
    users: [User]
    books: [Book]
  }

  input BookInput {
    author: String
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
