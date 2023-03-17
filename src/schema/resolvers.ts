import { heroes } from '../data.js'

export const resolvers = {
	Query: {
		heroes: () => heroes,
		hero: (parent, { name }) => {
			if (name) {
				const hero = heroes.find(hero => {
					return hero.name === name
				})
				return hero
			}
		},
		ability: (parent, { name }) => {
			if (name) {
				let results = heroes.filter(hero => {
					const ability = hero.abilities.filter(ability => ability.name.includes(name))
					if (ability.length) {
						return hero
					}
				})
				// console.log(results)
				if (results !== null) {
					return results
				}
			}
		},
	},
}
