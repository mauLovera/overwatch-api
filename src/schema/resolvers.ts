import { heroes } from '../data.js'

export const resolvers = {
	Query: {
		heroes: () => heroes,
		hero: (parent, args) => {
			const name = args.name
			const hero = heroes.filter(hero => {
        return hero.name === name
      })
			return hero[0]
		},
	},
}
