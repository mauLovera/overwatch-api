interface Hero {
	name: string
	role: 'Tank' | 'Damage' | 'Support'
	origin?: string
	bio?: string
	abilities?: {
		name: string
		description: string
	}[]
}

export const heroes: Hero[] = [
	{
		name: 'Ana',
		role: 'Support',
		origin: 'Cairo, Egypt',
		bio: 'A founding member of Overwatch and once renowned as the greatest sniper in the world, Ana Amari comes from a long line of decorated military veterans. Though she was thought to have perished in a firefight with Talon, Ana has rejoined the fray to protect her country, family, and closest allies.',
		abilities: [
			{
				name: 'Biotic Rifle',
				description: 'Long-range rifle that heals allies and damages enemies.',
			},
			{
				name: 'Sleep Dart',
				description: 'Fires a dart that puts an enemy to sleep.',
			},
			{
				name: 'Biotic Grenade',
				description:
					'Throws a grenade that heals and increases healing on allies, while damaging and preventing healing on enemies.',
			},
			{
				name: 'Nano Boost',
				description: "Increases an ally's damage, while reducing damage taken.",
			},
		],
	},
	{
		name: 'Ashe',
		role: 'Damage',
		origin: 'Deadlock Gorge, Arizona, USA',
		bio: 'A founding member of Overwatch and once renowned as the greatest sniper in the world, Ana Amari comes from a long line of decorated military veterans. Though she was thought to have perished in a firefight with Talon, Ana has rejoined the fray to protect her country, family, and closest allies.',
		abilities: [
			{
				name: 'The Viper',
				description:
					'Semi-automatic rifle. When zoomed in, damage and accuracy are increased at the cost of rate of fire speed.',
			},
			{
				name: 'Coach Gun',
				description: 'Blast enemies in front of you and knock yourself backwards.',
			},
			{
				name: 'Dynamite',
				description:
					'Throw an explosive that detonates after a short delay or immediately when shot.',
			},
			{
				name: 'B.O.B.',
				description:
					'Deploy Bob. He charges forward and knocks enemies into the air, then attacks with his arm cannons.',
			},
		],
	},
	{
		name: 'Baptiste',
		role: 'Support',
		origin: 'Tortuga, Haiti (formerly), Watchpoint: Gibraltar',
		bio: 'An elite combat medic, Baptiste was lured into Talon by the promise of easy riches. Later, disgusted with what he had done, he deserted Talon to forge a new path for himself. Now he works toward a better world, healing where he can and fighting when he must.',
		abilities: [
			{
				name: 'Biotic Launcher',
				description: 'Three-round burst gun.',
			},
			{
				name: 'Regenerative Burst',
				description:
					'Active to heal yourself and nearby allies instantly, with additional healing over time. Instant heal is doubled for targets less than half health.',
			},
			{
				name: 'Immorality Field',
				description: 'Toss a device that prevents allies from dying. The device can be destroyed.',
			},
			{
				name: 'Amplification Matrix',
				description:
					'Project a matrix that doubles the damage and healing effect of allied projectiles.',
			},
			{
				name: 'Exo Boots',
				description: 'Hold crouch to jump higher.',
			},
		],
	},
	{
		name: 'Bastion',
		role: 'Damage',
		origin: 'Gothenburg, Sweden',
		bio: 'Left abandoned and dormant after the devastating Omnic Crisis, this curious Bastion unit has reawakened in a changed world. The once-hostile machine now possesses curiosity and a fascination for nature. Along with his bird companion, Ganymede, Bastion has found his way into the care of Torbjorn Lindholm, where he now works to help the humans he once fought against.',
		abilities: [
			{
				name: 'Configuration: Assault',
				description: 'A slow-moving tank with a powerful rotary cannon.',
			},
			{
				name: 'Configuration: Recon',
				description: 'Mobile, with a lightweight and highly accurate weapon.',
			},
			{
				name: 'A-36 Tactical Grenade',
				description:
					'Fire a bomb that bounces off walls and explodes when it impacts enemies or the ground.',
			},
			{
				name: 'Reconfigure',
				description: 'Switch between weapon configurations.',
			},
			{
				name: 'Configuration: Artillery',
				description: 'Become immobile and fire up to 3 powerful artillery shells.',
			},
		],
	},
	{
		name: 'Brigitte',
		role: 'Support',
		origin: 'Gothenburg, Sweden (formerly), Watchpoint: Gibraltar',
		bio: 'A Lindholm through and through, Brigitte’s aptitude for engineering is matched by her sense of honor. From her youth, Brigitte was inspired by the tales of valor she heard from her godfather, Reinhardt. When she came of age, she became the squire to his knight. The two have joined the new Overwatch, hoping to right the wrongs of the world.',
		abilities: [
			{
				name: 'Rocket Flail',
				description: 'Melee weapon with extended range.',
			},
			{
				name: 'Repair Pack',
				description: 'Heals an ally for a short duration.',
			},
			{
				name: 'Whip Shot',
				description: 'Launch your flail forward to knock an enemy away from you.',
			},
			{
				name: 'Barrier Shield',
				description: 'Deploy a frontal energy barrier.',
			},
			{
				name: 'Shield Bash',
				description:
					'Available when Barrier Shield is deployed. Dash forward to knock back an enemy.',
			},
			{
				name: 'Rally',
				description: 'Move faster and provide extra health to nearby allies.',
			},
			{
				name: 'Inspire',
				description: 'Dealing damage to enemies heals nearby allies.',
			},
		],
	},
	{
		name: 'Cassidy',
		role: 'Damage',
		origin: 'Santa Fe, New Mexico, USA (formerly), Watchpoint: Gibraltar',
		bio: 'A founding member of the notorious Deadlock Gang, Cassidy was eventually coerced into joining Blackwatch, Overwatch’s covert-ops division. He came to believe he could make amends for his past by righting the world’s injustices. But when Overwatch fell, Cassidy went underground, resurfacing later as a gunslinger for hire, fighting only for causes he believes are just.',
		abilities: [
			{
				name: 'Peacekeeper',
				description: 'Accurate, powerful revolver.',
			},
			{
				name: 'Combat Roll',
				description: "Roll in the direction you're moving and reload.",
			},
			{
				name: 'Magnetic Grenade',
				description:
					'Throw a short range grenade that homes in on nearby enemies and deals additional damage if it sticks to them.',
			},
			{
				name: 'Deadeye',
				description:
					'Face off against your enemies. Lock on to your enemies and shoot them by retriggering ability.',
			},
		],
	},
	{
		name: 'D.Va',
		role: 'Tank',
		origin: 'MEKA Base, Busan, South Korea (formerly), Watchpoint: Gibraltar',
		bio: 'Hana Song—better known by her screen name “D.Va”–is the best of the best. A former professional gamer, D.Va now puts her skills to use as a mech pilot in defense of South Korea. She and the other pilots, known as the MEKA Squad, stand between their country and the invading Gwishin: a mechanical threat from deep beneath the sea.',
		abilities: [
			{
				name: 'Fusion Cannons',
				description: 'Automatic short-range spread weapons.',
			},
			{
				name: 'Light Gun',
				description: 'Automatic pistol.',
			},
			{
				name: 'Boosters',
				description: 'Fly in the diretion you are facing.',
			},
			{
				name: 'Defense Matrix',
				description: 'Block projectiles in an area in front of you.',
			},
			{
				name: 'Micro Missles',
				description: 'Launch a volley of explosive rockets.',
			},
			{
				name: 'Self-Destruct',
				description: 'Eject and overload your mech, causing it to explode after a short time.',
			},
			{
				name: 'Call Mech',
				description: 'Call down a new mech.',
			},
			{
				name: 'Eject!',
				description: 'Eject out of your mech when it is destroyed.',
			},
		],
	},
	{
		name: 'Doomfist',
		role: 'Tank',
		origin: 'Oyo, Nigeria (formerly), Rome, Italy',
		bio: 'A highly trained fighter and born leader, Akande Ogundimu lost his right arm in the Omnic Crisis, then joined Talon. Rising through the ranks, he killed his boss – the previous Doomfist – taking his eponymous weapon and title. Now, he is determined to plunge the world into a new conflict for his own mysterious purposes.',
		abilities: [
			{
				name: 'Hand Cannon',
				description: 'Short-range weapon with spread. Reloads automatically.',
			},
			{
				name: 'Rocket Punch',
				description:
					'Hold to charge then release to launch forward and knock an enemy back. Damage increases if the enemy hits a wall.',
			},
			{
				name: 'Seismic Slam',
				description: 'Leap and smash the ground.',
			},
			{
				name: 'Power Block',
				description:
					'Protect yourself from frontal attacks. Blocking heavy damage empowers Rocket Punch.',
			},
			{
				name: 'Meteor Strike',
				description:
					'Leap up into the air. Move the targeting circle, then strike the targeted area.',
			},
		],
	},
	{
		name: 'Echo',
		role: 'Damage',
		origin: 'Switzerland (formerly), United States (fromely), Watchpoint: Gibraltar',
		bio: 'Developed by Overwatch roboticist Mina Liao, the highly adaptable, advanced AI-driven robot Echo derives her personality from her creator. But after Liao was killed, her project was shut down and Echo placed in military quarantine. Years later, she was freed by Cole Cassidy and joined the new Overwatch in the fight to save the world.',
		abilities: [
			{
				name: 'Tri-Shot',
				description: 'Fires 3 shots at once, in a triangle pattern.',
			},
			{
				name: 'Sticky Bombs',
				description: 'Fire a volley of sticky bombs that detonate after a delay.',
			},
			{
				name: 'Flight',
				description: 'Fly forward quickly and then free-fly briefly.',
			},
			{
				name: 'Focusing Beam',
				description:
					'Channel a beam for a few seconds. Deals very high damage to targets under health.',
			},
			{
				name: 'Duplicate',
				description:
					'Become a copy of the targeted enemy hero. They cannot swap heroes for the duration.',
			},
			{
				name: 'Glide',
				description: 'Hold jump to glide forward.',
			},
		],
	},
	{
		name: 'Genji',
		role: 'Damage',
		origin:
			'Hanamura, Japan (formerly), Shambali Monastery, Nepal (formerly), Watchpoint: Gibraltar',
		bio: 'Near death at the hands of his own brother, ninja Genji Shimada was rescued by Overwatch. To save his life, they made him a living weapon with cybernetic upgrades. Struggling with his nature and purpose after Overwatch’s fall, Genji sought peace through study with the omnic monk Zenyatta before answering Winston’s call.',
		abilities: [
			{
				name: 'Shuriken',
				description:
					'Throw an accurate burst of 3 projectiles. With alternate-fire, throw a fan of 3 projectiles in an arc.',
			},
			{
				name: 'Deflect',
				description:
					'Deflect incoming projectiles back towards the direction you are aiming and block melee attacks.',
			},
			{
				name: 'Swift Strike',
				description:
					'Rapidly dash forward and inflict damage on enemies. Eliminations reset the cooldown.',
			},
			{
				name: 'Dragonblade',
				description: 'Unsheathe a deadly melee weapon.',
			},
			{
				name: 'Cyber-Agility',
				description: 'Climb on walls and double jump.',
			},
		],
	},
	{
		name: 'Hanzo',
		role: 'Damage',
		origin: 'Hanamura, Japan (formerly)',
		bio: 'When his father passed, Hanzo was left to lead the Shimada ninja clan. The clan’s elders pushed him to bring his carefree brother, Genji, into line—leading to a confrontation where Hanzo struck Genji down. Horrified, Hanzo abandoned the clan, roaming the world in solitude as punishment. But now, finding out that his brother still lives, Hanzo must decide where this new path will take him.',
		abilities: [
			{
				name: 'Storm Bow',
				description: 'Hold to charge then release to launch arrows further.',
			},
			{
				name: 'Storm Arrows',
				description: 'The next 5 arrows fire instantly at reduced damage.',
			},
			{
				name: 'Sonic Arrow',
				description: 'Reveals enemies for a short time upon impact.',
			},
			{
				name: 'Lunge',
				description: 'Double Jump.',
			},
			{
				name: 'Dragonstrike',
				description: 'Launch a deadly Dragon Spirit that devestates enemies it passes through.',
			},
			{
				name: 'Wall Climb',
				description: 'Jump at walls to climb up them.',
			},
		],
	},
	{
		name: 'Junker Queen',
		role: 'Tank',
		origin: 'Junkertown, Australia',
		bio: 'A former wastelander, Odessa "Dez" Stone has ruled the squabbling Junker factions for over a decade. Everywhere she goes is her battlefield of choice, every seat is her throne, and everyone on the planet is her subject, whether they know it or not. Her tale of conquest is just beginning...',
		abilities: [
			{
				name: 'Scattergun',
				description: 'Pump action shotgun.',
			},
			{
				name: 'Jagged Blade',
				description:
					'Active: Throw the blade. Re-activate to pull it back, along with any impaled enemy. Passive: Wound enemies hit by Quick Melee or Throw, dealing damage over time.',
			},
			{
				name: 'Scattergun',
				description: 'Pump action shotgun.',
			},
			{
				name: 'Scattergun',
				description: 'Pump action shotgun.',
			},
		],
	},
	{
		name: 'Junkrat',
		role: 'Damage',
	},
	{
		name: 'Kiriko',
		role: 'Support',
	},
	{
		name: 'Lúcio',
		role: 'Support',
	},
	{
		name: 'Mei',
		role: 'Damage',
	},
	{
		name: 'Mercy',
		role: 'Support',
	},
	{
		name: 'Moira',
		role: 'Support',
	},
	{
		name: 'Orisa',
		role: 'Tank',
	},
	{
		name: 'Pharah',
		role: 'Damage',
	},
	{
		name: 'Ramattra',
		role: 'Tank',
	},
	{
		name: 'Reaper',
		role: 'Damage',
	},
	{
		name: 'Reinhardt',
		role: 'Tank',
	},
	{
		name: 'Roadhog',
		role: 'Tank',
	},
	{
		name: 'Sigma',
		role: 'Tank',
	},
	{
		name: 'Sojourn',
		role: 'Damage',
	},
	{
		name: 'Soldier: 76',
		role: 'Damage',
	},
	{
		name: 'Sombra',
		role: 'Damage',
	},
	{
		name: 'Symmetra',
		role: 'Damage',
	},
	{
		name: 'Torbjörn',
		role: 'Damage',
	},
	{
		name: 'Tracer',
		role: 'Damage',
	},
	{
		name: 'Widowmaker',
		role: 'Damage',
	},
	{
		name: 'Winston',
		role: 'Tank',
	},
	{
		name: 'Wrecking Ball',
		role: 'Tank',
	},
	{
		name: 'Zarya',
		role: 'Tank',
	},
	{
		name: 'Zenyatta',
		role: 'Support',
	},
]
