export const typeDefs = `#graphql
  type Hero {
    name: String
    role: String
  }

  type Query {
    heroes: [Hero]
    hero(name: String!): Hero
  }
`;
