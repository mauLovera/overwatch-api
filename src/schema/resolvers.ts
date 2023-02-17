import { heroes } from '../data.js'

export const resolvers = {
	Query: {
		heroes: () => heroes,
	},
}
