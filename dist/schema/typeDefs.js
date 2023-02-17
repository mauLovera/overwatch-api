export const typeDefs = `#graphql
  type Hero {
    name: String
    role: String
  }

  type Query {
    heroes: [Hero]
  }
`;
