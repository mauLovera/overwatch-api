export const typeDefs = `#graphql
  type Hero {
    name: String
    role: String
    origin: String
    bio: String
    abilities: Abilities
  }

  type Abilities {
    name: String
    description: String
  }

  type Query {
    heroes: [Hero]
    hero(name: String!): Hero
    ability(name: String!): [Hero]

  }
`