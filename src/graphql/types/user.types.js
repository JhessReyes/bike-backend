import { gql } from 'graphql-tag';

const UserType = gql`
    type User {
        id: String!
        name: String!
        email: String!
    }   

    type UserPage {
        rows: [User]
        length: Int
        pages: Int
    }

    type Query {
        user(id: String!): User
        users(page: Int, limit: Int): UserPage
    }
`;


export { UserType };