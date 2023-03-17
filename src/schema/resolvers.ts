import { heroes } from '../data.js'

export const resolvers = {
	Query: {
		heroes: () => heroes,
		hero: (parent, {name}) => {
			if (name) {
				const hero = heroes.find(hero => {
					return hero.name === name
				})
				return hero
			}
		},
		
	},
}
