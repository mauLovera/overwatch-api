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
    name: "Mercy",
    role: "Support",
    origin: "Zürich, Switzerland (formerly), Watchpoint: Gibraltar",
    bio: 'A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace.',
    abilities: [
      {
        name: 'Caduceus Staff',
        description: 'Hold to heal an ally.'
      },
      {
        name: 'Caduceus Blaster',
        description: 'Automatic weapon.'
      },
      {
        name: 'Guardian Angel',
        description: 'Fly towards an ally. While in flight, Jump launches you forward, and Crouch lauches you upward.'
      },
      {
        name: 'Resurrect',
        description: 'Revive a dead teammate.'
      },
      {
        name: 'Angelic Descent',
        description: 'Fall very slowly.'
      },
      {
        name: 'Valkyrie',
        description: 'Gain ability to fly. Abilities are enhanced.'
      }
    ]
  },
  {
    name: "Moira",
    role: "Support",
    origin: 'Oasis, Iraq',
    bio:"Equal parts brilliant and controversial, scientist Moira O'Deorain is on the cutting edge of genetic engineering, searching for a way to rewrite the fundamental building blocks of life.",
    abilities: [
      {
        name: 'Biotic Grasp',
        description: 'Hold to heal all allies in front of you. Consumes biotic energy. Long range beam weapon. Damage dealt heals you and replenishes your biotic energy.'
      },
      {
        name: 'Biotic Orb',
        description: 'Launch a bouncing sphere that either heals nearby allies or damages nearby enemies.'
      },
      {
        name: 'Fade',
        description: 'Disappear, move faster, and become invulnerable, you cannot shoot.'
      },
      {
        name: 'Coalescence',
        description: 'Fire a beam that heals allies and damages enemies'
      }
    ]
  },
  {
    name: "Orisa",
    role: "Tank",
    origin: "Numbani, Africa",
    bio: "Built from parts of one of Numbani's short-lived OR15 defense robots, Orisa is the city's newest protector, though she still has much to learn.",
    abilities: [
      {
        name: 'Augmented Fusion Driver',
        description: 'Automatic heat based automatic. Deals more damage at closer range.'
      },
      {
        name: 'Energy Javelin',
        description: 'Launch your javelin at an enemy to stun and knock them back. More effective if the enemy hits a wall'
      },
      {
        name: 'Fortify',
        description: 'Gain temporary health, reducing all damage taken and becoming unstoppable. While active, heat generated by your weapon is reduced.'
      },
      {
        name: 'Javelin Spin',
        description: 'Spin your javelin to destroy projectiles and block melee attacks, while also pushing enemies and increasing forward speed.'
      },
      {
        name: 'Terra Surge',
        description: 'Sweep in enemies and anchor down, gaining the effects of Fortify and charging up a surge of damage. Use Q to unleash the surge early.'
      }
    ]
  },
  {
    name: "Pharah",
    role: "Damage",
    origin: "Giza, Egypt (formerly), Watchpoint: Gibraltar", 
    bio: "Fareeha Amari's commitment to duty runs in her blood. She comes from a long line of highly decorated soldiers and burns with the desire to serve with honor.",
    abilities: [
      {
        name: 'Rocket Launcher',
        description: 'Long-range explosive projectile weapon.'
      },
      {
        name: 'Jump Jet',
        description: 'Fly rapidly upwards.'
      },
      {
        name: 'Concussive Blast',
        description: 'Launch an explosive blast to knock back enemies.'
      },
      {
        name: 'Barrage',
        description: 'Launch a continuous volley of mini-rockets.'
      },
      {
        name: 'Hover Jets',
        description: 'Hold to hover.'
      }
    ]
  },
  {
    name: "Ramattra",
    role: "Tank",
    origin: "Shambali Monastery, Nepal",
    bio: "The brutal leader of Null Sector will stop at nothing to see his vision for the world realized.",
    abilities: [
      {
        name: 'Void Accelerator (Omnic Form)',
        description: 'Fire a stream of projectiles in a fixed pattern.'
      },
      {
        name: 'Void Barrier (Omnic Form)',
        description: 'Create a barrier at the target location.'
      },
      {
        name: 'Pummel (Nemesis Form)',
        description: 'Punch forward, creating a wave of piercing energy with every swing.'
      },
      {
        name: 'Ravenous Vortex',
        description: 'Fire a nano ball, which explodes when it hits the ground, spreading a damaging field. Affected enemies are slowed and pulled downward.'
      },
      {
        name: 'Annihilation',
        description: 'Enter Nemesis Form and create an energy swarm surrounding yourself. This swarm will lash our towars nearby enemies, dealing damage and pausing the duration when the damage is dealt.'
      }
    ]
  },
  {
    name: "Reaper",
    role: "Damage",
    origin: "Rome, Italy",
    bio: 'Some speak of a black-robed terrorist known only as the Reaper. His identity and motives are a mystery. What is known is that where he appears, death follows.',
    abilities: [
      {
        name: 'Hellfire Shotguns',
        description: 'Short-range spread weapons.'
      },
      {
        name: 'Shadow Step',
        description: 'Teleport to a targeted location.'
      },
      {
        name: 'Wraith Form',
        description: 'Move faster and become invulerable, but you cannot shoot.'
      },
      {
        name: 'Death Blossom',
        description: 'Damage all nearby enemies.'
      },
      {
        name: 'The Reaping',
        description: 'Dealing damage heals you.'
      }
    ]

  },
  {
    name: "Reinhardt",
    role: "Tank",
    origin: "Stuttgart, Germany (formerly), Watchpoint: Gibraltar",
    bio: "Reinhardt Wilhelm styles himself as a champion of a bygone age, who lives by the knightly codes of valor, justice, and courage.",
    abilities: [
      {
        name: 'Rocket Hammer',
        description: 'Devastating melee weapon.'
      },
      {
        name: 'Charge',
        description: 'Charge forward and smash an enemy against a wall.'
      },
      {
        name: 'Fire Strike',
        description: 'Launch a fiery projectile'
      },
      {
        name: 'Barrier Field',
        description: 'Hold to depoly a frontal energy barrier.'
      },
      {
        name: 'Earthshatter',
        description: 'Knock down all enemies in front of you.'
      }
    ]
  },
  {
    name: "Roadhog",
    role: "Tank",
    origin: "Junkertown, Australia (formerly)",
    bio: 'Roadhog is a powerful enforcer with a well-earned reputation for random and wanton destruction.',
    abilities: [
      {
        name: 'Scrap Gun',
        description: 'Short-range spread weapon'
      },
      {
        name: 'Chain Hook',
        description: 'Drag a targeted enemy to you.'
      },
      {
        name: 'Take A Breather',
        description: 'Heal yourself and reduce damage taken over a short time.'
      },
      {
        name: 'Whole Hog',
        description: 'Damage and knock back enemies in front of you.'
      }
    ]
  },
  {
    name: "Sigma",
    role: "Tank",
    origin: "The Hague, Netherlands (formerly), International Space Station (formerly)",
    bio: "Brilliant astrophysicist Dr. Siebren de Kuiper's life changed forever when an experiment gone wrong gave him the ability to control gravity; now, Talon manipulates him to their own ends.",
    abilities: [
      {
        name: "Hyperspheres",
        description: "Lauch two charges which implode after a short duration, deaking damage in an area."
      },
      {
        name: "Kinetic Grasp",
        description: "Absorb projectiles in front of you and conver them into shields."
      },
      {
        name: "Accertion",
        description: "Gather a mass of debris and throw it at an enemy to knock them down."
      },
      {
        name: "Experimental Barrier",
        description: "Hold to propel a floating barrier;' release to stop. Press again to recall the barrier to you."
      },
      {
        name: "Gravitic Flux", 
        description: "Manipulate gravity to lift enemies into the air and slam them back down"
      }
    ]
  },
  {
    name: "Sojourn",
    role: "Damage",
    origin: "Toronto, Canada",
    bio: "As a leader in the bygone days of Overwatch, Vivian Chase, callsign Sojourn, is determined to ensure its new heroes don’t repeat the mistakes of the past.",
    abilities: [
      {
        name: 'Railrun',
        description: "Rapid firing projectiles that generate energy on hit. Hit impact shot that consumes stored energy."
      },
      {
        name: "Power Slide",
        description: 'Ground slide that can cancel into a high jump.'
      },
      {
        name: 'Disruptor Shot',
        description: 'Launch an energy burst that snares and deals damage to enemies within it.'
      },
      {
        name: 'Overclock',
        description: 'Railgun energy auto-charges for a short duration and charged shots pierce enemies'
      }
    ]
  },
  {
    name: "Soldier: 76",
    role: "Damage",
    origin: "Unknown",
    bio: "The target of an international manhunt, the vigilante known as Soldier: 76 wages a personal war to expose the truth behind Overwatch's collapse.",
    abilities: [
      {
        name: "Heavy Pulse Rifle",
        description: "Automatic assault weapon."
      },
      {
        name: "Sprint",
        description: "Run faster while moving forward."
      },
      {
        name: "Biotic Field",
        description: 'Deploy a field that heals you and your allies.'
      },
      {
        name: "Helix Rockets",
        description: "Launch a volley of explosive rockets."
      },
      {
        name: "Tactile Visor",
        description: "Automatically aims your weapon at targets in view."
      }
    ]
  },
  {
    name: "Sombra",
    role: "Damage",
    origin: "Dorado, Mexico",
    bio: "One of the world's most notorious hackers, Sombra uses information to manipulate those in power.",
    abilities: [
      {
        name: 'Machine Pistol',
        description: 'Short-range automatic weapon'
      },
      {
        name: 'Hack',
        description: "Hold to hack. Hacked enemies cannot use abilies briefly and can be seen through walls. Hacked health packs spawn faster but can't be used by enemies. Taking damage interrupts the hack attempt."
      },
      {
        name: 'Stealth',
        description: 'Become invisible and move quickly.'
      },
      {
        name: 'Translocator',
        description: 'Throw a beacon, then press E again to teleport it. Press ABILITY 2 to remove it.'
      },
      {
        name: 'EMP',
        description: "Deals damage equals to 40% of all nearby enemies' health, hacking them and destroying barriers around you."
      }, 
      {
        name: 'Opportunist',
        description: 'You detect critically injured enemies through walls, and deal 40% more damage to hacked enemies.'
      }
    ]
  },
  {
    name: "Symmetra",
    role: "Damage",
    origin: "Utopaea, India",
    bio: "Symmetra literally bends reality. By manipulating hard-light constructs, she crafts the world as she wishes it to be, in hopes of engineering a perfect society.",
    abilities: [
      {
        name: "Photon Projector",
        description: "Short-range beam weapon with increasing damage."
      },
      {
        name: "Sentry Turret",
        description: "Deploy a small turret that damages and slows enemies."
      },
      {
        name: "Teleporter",
        description: "Create two temporary teleporters that enable instant travel between them."
      },
      {
        name: "Photon Barrier",
        description: "Deploy a massive energy barrier."
      }
    ]
  },
  {
    name: "Torbjörn",
    role: "Damage",
    origin: "Gothenburg, Sweden",
    bio: "At its height, Overwatch possessed one of the most advanced armaments on the planet, which could be traced to the workshop of an ingenious engineer named Torbjörn Lindholm.",
    abilities: [
      {
        name: "Rivet Gun",
        description:"Slow firing, long-ranged weapon. Inaccurate but short-range weapon."
      },
      {
        name: "Forge Hammer",
        description: "Swing to repair your turret or damage an enemy."
      },
      {
        name: "Deploy Turret",
        description: "Deploy a self-building turret."
      },
      {
        name: "Overload",
        description: "Gain additional extra health as well as improved attack, movement, and reload speed."
      },
      {
        name: "Molten Core",
        description: "Create pools of molten slag that damage enemies. Deals additional damage to armor."
      }
    ]
  },
  {
    name: "Tracer",
    role: "Damage",
    origin: "London, England, Watchpoint: Gibraltar",
    bio: "The former Overwatch agent known as Tracer is a time-jumping adventurer and an irrepressible force for good.",
    abilities: [
      {
        name: "Pulse Pistols",
        description: "Short-range automatic weapons."
      },
      {
        name: "Blink",
        description: "Teleport in the direction you are moving."
      },
      {
        name: "Recall",
        description: "Travel back in time to your previous location and health."
      }, 
      {
        name: "Pulse Bomb",
        description: "Throw out a powerful sticky explosive."
      }
    ]
  },
  {
    name: "Widowmaker",
    role: "Damage",
    origin: "Annecy, France",
    bio: "Widowmaker is the perfect assassin: a patient, ruthlessly efficient killer who shows neither emotion nor remorse.",
    abilities: [
      {
        name: "Widow's Kiss", 
        description: "Automatic assault weapon. Hold for long-range sniper weapon."
      },
      {
        name: "Grappling Hook",
        description: "Launch a hook that pulls you towards a ledge."
      },
      {
        name: "Venom Mine",
        description: "Launch a poison trap."
      },
      {
        name: "Infra-Sight",
        description: "Provide your team with a view of the enemy's location."
      }
    ]
  },
  {
    name: "Mercy",
    role: "Support",
    origin: "Zürich, Switzerland (formerly), Watchpoint: Gibraltar",
    bio: 'A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace.',
    abilities: [
      {
        name: 'Caduceus Staff',
        description: 'Hold to heal an ally.'
      },
      {
        name: 'Caduceus Blaster',
        description: 'Automatic weapon.'
      },
      {
        name: 'Guardian Angel',
        description: 'Fly towards an ally. While in flight, Jump launches you forward, and Crouch lauches you upward.'
      },
      {
        name: 'Resurrect',
        description: 'Revive a dead teammate.'
      },
      {
        name: 'Angelic Descent',
        description: 'Fall very slowly.'
      },
      {
        name: 'Valkyrie',
        description: 'Gain ability to fly. Abilities are enhanced.'
      }
    ]
  },
  {
    name: "Moira",
    role: "Support",
    origin: 'Oasis, Iraq',
    bio:"Equal parts brilliant and controversial, scientist Moira O'Deorain is on the cutting edge of genetic engineering, searching for a way to rewrite the fundamental building blocks of life.",
    abilities: [
      {
        name: 'Biotic Grasp',
        description: 'Hold to heal all allies in front of you. Consumes biotic energy. Long range beam weapon. Damage dealt heals you and replenishes your biotic energy.'
      },
      {
        name: 'Biotic Orb',
        description: 'Launch a bouncing sphere that either heals nearby allies or damages nearby enemies.'
      },
      {
        name: 'Fade',
        description: 'Disappear, move faster, and become invulnerable, you cannot shoot.'
      },
      {
        name: 'Coalescence',
        description: 'Fire a beam that heals allies and damages enemies'
      }
    ]
  },
  {
    name: "Orisa",
    role: "Tank",
    origin: "Numbani, Africa",
    bio: "Built from parts of one of Numbani's short-lived OR15 defense robots, Orisa is the city's newest protector, though she still has much to learn.",
    abilities: [
      {
        name: 'Augmented Fusion Driver',
        description: 'Automatic heat based automatic. Deals more damage at closer range.'
      },
      {
        name: 'Energy Javelin',
        description: 'Launch your javelin at an enemy to stun and knock them back. More effective if the enemy hits a wall'
      },
      {
        name: 'Fortify',
        description: 'Gain temporary health, reducing all damage taken and becoming unstoppable. While active, heat generated by your weapon is reduced.'
      },
      {
        name: 'Javelin Spin',
        description: 'Spin your javelin to destroy projectiles and block melee attacks, while also pushing enemies and increasing forward speed.'
      },
      {
        name: 'Terra Surge',
        description: 'Sweep in enemies and anchor down, gaining the effects of Fortify and charging up a surge of damage. Use Q to unleash the surge early.'
      }
    ]
  },
  {
    name: "Pharah",
    role: "Damage",
    origin: "Giza, Egypt (formerly), Watchpoint: Gibraltar", 
    bio: "Fareeha Amari's commitment to duty runs in her blood. She comes from a long line of highly decorated soldiers and burns with the desire to serve with honor.",
    abilities: [
      {
        name: 'Rocket Launcher',
        description: 'Long-range explosive projectile weapon.'
      },
      {
        name: 'Jump Jet',
        description: 'Fly rapidly upwards.'
      },
      {
        name: 'Concussive Blast',
        description: 'Launch an explosive blast to knock back enemies.'
      },
      {
        name: 'Barrage',
        description: 'Launch a continuous volley of mini-rockets.'
      },
      {
        name: 'Hover Jets',
        description: 'Hold to hover.'
      }
    ]
  },
  {
    name: "Ramattra",
    role: "Tank",
    origin: "Shambali Monastery, Nepal",
    bio: "The brutal leader of Null Sector will stop at nothing to see his vision for the world realized.",
    abilities: [
      {
        name: 'Void Accelerator (Omnic Form)',
        description: 'Fire a stream of projectiles in a fixed pattern.'
      },
      {
        name: 'Void Barrier (Omnic Form)',
        description: 'Create a barrier at the target location.'
      },
      {
        name: 'Pummel (Nemesis Form)',
        description: 'Punch forward, creating a wave of piercing energy with every swing.'
      },
      {
        name: 'Ravenous Vortex',
        description: 'Fire a nano ball, which explodes when it hits the ground, spreading a damaging field. Affected enemies are slowed and pulled downward.'
      },
      {
        name: 'Annihilation',
        description: 'Enter Nemesis Form and create an energy swarm surrounding yourself. This swarm will lash our towars nearby enemies, dealing damage and pausing the duration when the damage is dealt.'
      }
    ]
  },
  {
    name: "Reaper",
    role: "Damage",
    origin: "Rome, Italy",
    bio: 'Some speak of a black-robed terrorist known only as the Reaper. His identity and motives are a mystery. What is known is that where he appears, death follows.',
    abilities: [
      {
        name: 'Hellfire Shotguns',
        description: 'Short-range spread weapons.'
      },
      {
        name: 'Shadow Step',
        description: 'Teleport to a targeted location.'
      },
      {
        name: 'Wraith Form',
        description: 'Move faster and become invulerable, but you cannot shoot.'
      },
      {
        name: 'Death Blossom',
        description: 'Damage all nearby enemies.'
      },
      {
        name: 'The Reaping',
        description: 'Dealing damage heals you.'
      }
    ]

  },
  {
    name: "Reinhardt",
    role: "Tank",
    origin: "Stuttgart, Germany (formerly), Watchpoint: Gibraltar",
    bio: "Reinhardt Wilhelm styles himself as a champion of a bygone age, who lives by the knightly codes of valor, justice, and courage.",
    abilities: [
      {
        name: 'Rocket Hammer',
        description: 'Devastating melee weapon.'
      },
      {
        name: 'Charge',
        description: 'Charge forward and smash an enemy against a wall.'
      },
      {
        name: 'Fire Strike',
        description: 'Launch a fiery projectile'
      },
      {
        name: 'Barrier Field',
        description: 'Hold to depoly a frontal energy barrier.'
      },
      {
        name: 'Earthshatter',
        description: 'Knock down all enemies in front of you.'
      }
    ]
  },
  {
    name: "Roadhog",
    role: "Tank",
    origin: "Junkertown, Australia (formerly)",
    bio: 'Roadhog is a powerful enforcer with a well-earned reputation for random and wanton destruction.',
    abilities: [
      {
        name: 'Scrap Gun',
        description: 'Short-range spread weapon'
      },
      {
        name: 'Chain Hook',
        description: 'Drag a targeted enemy to you.'
      },
      {
        name: 'Take A Breather',
        description: 'Heal yourself and reduce damage taken over a short time.'
      },
      {
        name: 'Whole Hog',
        description: 'Damage and knock back enemies in front of you.'
      }
    ]
  },
  {
    name: "Sigma",
    role: "Tank",
    origin: "The Hague, Netherlands (formerly), International Space Station (formerly)",
    bio: "Brilliant astrophysicist Dr. Siebren de Kuiper's life changed forever when an experiment gone wrong gave him the ability to control gravity; now, Talon manipulates him to their own ends.",
    abilities: [
      {
        name: "Hyperspheres",
        description: "Lauch two charges which implode after a short duration, deaking damage in an area."
      },
      {
        name: "Kinetic Grasp",
        description: "Absorb projectiles in front of you and conver them into shields."
      },
      {
        name: "Accertion",
        description: "Gather a mass of debris and throw it at an enemy to knock them down."
      },
      {
        name: "Experimental Barrier",
        description: "Hold to propel a floating barrier;' release to stop. Press again to recall the barrier to you."
      },
      {
        name: "Gravitic Flux", 
        description: "Manipulate gravity to lift enemies into the air and slam them back down"
      }
    ]
  },
  {
    name: "Sojourn",
    role: "Damage",
    origin: "Toronto, Canada",
    bio: "As a leader in the bygone days of Overwatch, Vivian Chase, callsign Sojourn, is determined to ensure its new heroes don’t repeat the mistakes of the past.",
    abilities: [
      {
        name: 'Railrun',
        description: "Rapid firing projectiles that generate energy on hit. Hit impact shot that consumes stored energy."
      },
      {
        name: "Power Slide",
        description: 'Ground slide that can cancel into a high jump.'
      },
      {
        name: 'Disruptor Shot',
        description: 'Launch an energy burst that snares and deals damage to enemies within it.'
      },
      {
        name: 'Overclock',
        description: 'Railgun energy auto-charges for a short duration and charged shots pierce enemies'
      }
    ]
  },
  {
    name: "Soldier: 76",
    role: "Damage",
    origin: "Unknown",
    bio: "The target of an international manhunt, the vigilante known as Soldier: 76 wages a personal war to expose the truth behind Overwatch's collapse.",
    abilities: [
      {
        name: "Heavy Pulse Rifle",
        description: "Automatic assault weapon."
      },
      {
        name: "Sprint",
        description: "Run faster while moving forward."
      },
      {
        name: "Biotic Field",
        description: 'Deploy a field that heals you and your allies.'
      },
      {
        name: "Helix Rockets",
        description: "Launch a volley of explosive rockets."
      },
      {
        name: "Tactile Visor",
        description: "Automatically aims your weapon at targets in view."
      }
    ]
  },
  {
    name: "Sombra",
    role: "Damage",
    origin: "Dorado, Mexico",
    bio: "One of the world's most notorious hackers, Sombra uses information to manipulate those in power.",
    abilities: [
      {
        name: 'Machine Pistol',
        description: 'Short-range automatic weapon'
      },
      {
        name: 'Hack',
        description: "Hold to hack. Hacked enemies cannot use abilies briefly and can be seen through walls. Hacked health packs spawn faster but can't be used by enemies. Taking damage interrupts the hack attempt."
      },
      {
        name: 'Stealth',
        description: 'Become invisible and move quickly.'
      },
      {
        name: 'Translocator',
        description: 'Throw a beacon, then press E again to teleport it. Press ABILITY 2 to remove it.'
      },
      {
        name: 'EMP',
        description: "Deals damage equals to 40% of all nearby enemies' health, hacking them and destroying barriers around you."
      }, 
      {
        name: 'Opportunist',
        description: 'You detect critically injured enemies through walls, and deal 40% more damage to hacked enemies.'
      }
    ]
  },
  {
    name: "Symmetra",
    role: "Damage",
    origin: "Utopaea, India",
    bio: "Symmetra literally bends reality. By manipulating hard-light constructs, she crafts the world as she wishes it to be, in hopes of engineering a perfect society.",
    abilities: [
      {
        name: "Photon Projector",
        description: "Short-range beam weapon with increasing damage."
      },
      {
        name: "Sentry Turret",
        description: "Deploy a small turret that damages and slows enemies."
      },
      {
        name: "Teleporter",
        description: "Create two temporary teleporters that enable instant travel between them."
      },
      {
        name: "Photon Barrier",
        description: "Deploy a massive energy barrier."
      }
    ]
  },
  {
    name: "Torbjörn",
    role: "Damage",
    origin: "Gothenburg, Sweden",
    bio: "At its height, Overwatch possessed one of the most advanced armaments on the planet, which could be traced to the workshop of an ingenious engineer named Torbjörn Lindholm.",
    abilities: [
      {
        name: "Rivet Gun",
        description:"Slow firing, long-ranged weapon. Inaccurate but short-range weapon."
      },
      {
        name: "Forge Hammer",
        description: "Swing to repair your turret or damage an enemy."
      },
      {
        name: "Deploy Turret",
        description: "Deploy a self-building turret."
      },
      {
        name: "Overload",
        description: "Gain additional extra health as well as improved attack, movement, and reload speed."
      },
      {
        name: "Molten Core",
        description: "Create pools of molten slag that damage enemies. Deals additional damage to armor."
      }
    ]
  },
  {
    name: "Tracer",
    role: "Damage",
    origin: "London, England, Watchpoint: Gibraltar",
    bio: "The former Overwatch agent known as Tracer is a time-jumping adventurer and an irrepressible force for good.",
    abilities: [
      {
        name: "Pulse Pistols",
        description: "Short-range automatic weapons."
      },
      {
        name: "Blink",
        description: "Teleport in the direction you are moving."
      },
      {
        name: "Recall",
        description: "Travel back in time to your previous location and health."
      }, 
      {
        name: "Pulse Bomb",
        description: "Throw out a powerful sticky explosive."
      }
    ]
  },
  {
    name: "Widowmaker",
    role: "Damage",
    origin: "Annecy, France",
    bio: "Widowmaker is the perfect assassin: a patient, ruthlessly efficient killer who shows neither emotion nor remorse.",
    abilities: [
      {
        name: "Widow's Kiss", 
        description: "Automatic assault weapon. Hold for long-range sniper weapon."
      },
      {
        name: "Grappling Hook",
        description: "Launch a hook that pulls you towards a ledge."
      },
      {
        name: "Venom Mine",
        description: "Launch a poison trap."
      },
      {
        name: "Infra-Sight",
        description: "Provide your team with a view of the enemy's location."
      }
    ]
  },
  {
    name: "Winston",
    role: "Tank",
		origin: "Horizon Lunar Colony (formerly), Watchpoint: Gibraltar",
		bio: "A super-intelligent, genetically engineered gorilla, mild-mannered Winston is a brilliant scientist and mighty champion. Fleeing the Horizon Lunar Colony, Winston found a home with Overwatch and became the hero he’d always dreamed of being... until Overwatch fell. Now, with the world facing a rising threat from Null Sector, Winston has recalled some of his friends and former allies. A new Overwatch has been born.",
		abilities: [
			{
				name: "Tesla Cannon",
				description: "Electric frontal-cone weapon."
			},
			{
				name: "Jump Pack",
				description: "Leap forward into the air. Landing on an enemy damages them."
			},
			{
				name: "Barrier Projector",
				description: "Deploy a protective energy dome."
			},
			{
				name: "Primal Rage",
				description: "Gain immense health, but you can only leap and punch enemies."
			}
		]
  },
  {
    name: "Wrecking Ball",
    role: "Tank",
    origin: "Horizon Lunar Colony (formerly), Junkertown (formerly)",
    bio: "A resourceful and highly intelligent mechanic and fighter, Wrecking Ball rose from the laboratories of Horizon Lunar Colony to become the Junker Queen’s champion.",
    abilities: [
      {
        name: "Quad Cannons",
        description: "Automatic assault weapons."
      },
      {
        name: "Grappling Claw",
        description: "Lauch a grappling claw to rapidly swing around the area. Enables high speed collisions to damage and knockback enemies."
      },
      {
        name: "Roll",
        description: "Transform into a ball and increase maximum movement speed."
      },
      {
        name: "Piledriver",
        description: "Slam into the ground below to damage and launch enemies upward."
      },
      {
        name: "Adaptive Shield",
        description: "Create temporary personal extra health. Amount increases with more enemies nearby."
      }, 
      {
        name: "Minefield",
        description: "Deploy a massive field of proximity mines."
      }
    ]
  },
  {
    name: "Zarya",
    role: "Tank",
    origin: "Krasnoyarsk Front (formerly), Novoanskoye Forward Base, Siberia, Russia (formerly), Watchpoint: Gibraltar",
    bio: "Aleksandra Zaryanova is one of the world's strongest women, a celebrated athlete who sacrificed personal glory to protect her family, friends, and country in a time of war.",
    abilities: [
      {
        name: "Particle Cannon",
        description: "Short-range linear beam weapon."
      },
      {
        name: "Particle Barrier",
        description: "Create a damage barrier around you."
      },
      {
        name: "Projected Barrier",
        description: "Create damage barrier around an ally."
      },
      {
        name: "Graviton Surge",
        description: "Launch a gravity well that pulls enemies to it."
      },
      {
        name: "Energy",
        description: "Damage blocked by barriers increases Particle Cannon damage."
      }
    ]
  },
  {
    name: "Zenyatta",
    role: "Support",
    origin: "Shambali Monastery, Nepal (formerly)",
    bio: "Zenyatta is an omnic monk who wanders the world in search of spiritual enlightenment. It is said that those who cross his path are never the same again.",
    abilities: [
      {
        name:"Orb of Destruction",
        description: "Energy projectile weapon."
      }, 
      {
        name: "Orb of Discord",
        description: "Launch this orb at an enemy to increase the damage they take."
      },
      {
        name: "Orb of Harmony",
        description: "Launch this orb at an ally to heal them."
      },
      {
        name: "Transcendence",
        description: "Become invulnerable, move faster, and heal nearby allies."
      },
      {
        name: "Snap Kick",
        description: "Quick melee damage increased by 50%, and its knockback is significantly increased."
      }
    ]
  },
  {
    name: "Wrecking Ball",
    role: "Tank",
    origin: "Horizon Lunar Colony (formerly), Junkertown (formerly)",
    bio: "A resourceful and highly intelligent mechanic and fighter, Wrecking Ball rose from the laboratories of Horizon Lunar Colony to become the Junker Queen’s champion.",
    abilities: [
      {
        name: "Quad Cannons",
        description: "Automatic assault weapons."
      },
      {
        name: "Grappling Claw",
        description: "Lauch a grappling claw to rapidly swing around the area. Enables high speed collisions to damage and knockback enemies."
      },
      {
        name: "Roll",
        description: "Transform into a ball and increase maximum movement speed."
      },
      {
        name: "Piledriver",
        description: "Slam into the ground below to damage and launch enemies upward."
      },
      {
        name: "Adaptive Shield",
        description: "Create temporary personal extra health. Amount increases with more enemies nearby."
      }, 
      {
        name: "Minefield",
        description: "Deploy a massive field of proximity mines."
      }
    ]
  },
  {
    name: "Zarya",
    role: "Tank",
    origin: "Krasnoyarsk Front (formerly), Novoanskoye Forward Base, Siberia, Russia (formerly), Watchpoint: Gibraltar",
    bio: "Aleksandra Zaryanova is one of the world's strongest women, a celebrated athlete who sacrificed personal glory to protect her family, friends, and country in a time of war.",
    abilities: [
      {
        name: "Particle Cannon",
        description: "Short-range linear beam weapon."
      },
      {
        name: "Particle Barrier",
        description: "Create a damage barrier around you."
      },
      {
        name: "Projected Barrier",
        description: "Create damage barrier around an ally."
      },
      {
        name: "Graviton Surge",
        description: "Launch a gravity well that pulls enemies to it."
      },
      {
        name: "Energy",
        description: "Damage blocked by barriers increases Particle Cannon damage."
      }
    ]
  },
  {
    name: "Zenyatta",
    role: "Support",
    origin: "Shambali Monastery, Nepal (formerly)",
    bio: "Zenyatta is an omnic monk who wanders the world in search of spiritual enlightenment. It is said that those who cross his path are never the same again.",
    abilities: [
      {
        name:"Orb of Destruction",
        description: "Energy projectile weapon."
      }, 
      {
        name: "Orb of Discord",
        description: "Launch this orb at an enemy to increase the damage they take."
      },
      {
        name: "Orb of Harmony",
        description: "Launch this orb at an ally to heal them."
      },
      {
        name: "Transcendence",
        description: "Become invulnerable, move faster, and heal nearby allies."
      },
      {
        name: "Snap Kick",
        description: "Quick melee damage increased by 50%, and its knockback is significantly increased."
      }
    ]
  },
]
