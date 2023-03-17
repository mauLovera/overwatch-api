import { heroes } from '../data.js';
export const resolvers = {
    Query: {
        heroes: () => heroes,
        hero: (parent, { name }) => {
            if (name) {
                const hero = heroes.find(hero => {
                    return hero.name === name;
                });
                return hero;
            }
        },
        ability: (parent, { abilityName }) => {
            if (abilityName) {
                let results = heroes.filter(hero => {
                    const ability = hero.abilities.filter(ability => ability.name.includes(abilityName));
                    if (ability.length) {
                        return hero;
                    }
                });
                // console.log(results)
                if (results !== null) {
                    return results;
                }
            }
        },
    },
};
