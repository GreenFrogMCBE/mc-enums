enum Gamemode {
	Creative = "creative",
	Survival = "survival",
	Adventure = "adventure",
	Spectator = "spectator",

	/** Fallbacks to the default world gamemode */
	Fallback = "fallback",
	Default = "fallback",
}

enum LegacyGamemode {
	Survival = 0,
	Creative = 1,
	Adventure = 2,

	/** Fallbacks to the default world gamemode */
	Fallback = 5,
	Default = 5,

	/** 1.19.50+ */
	Spectator = 6,
}

const GAMEMODE_MAP = {
	0: Gamemode.Spectator,
	1: Gamemode.Creative,
	2: Gamemode.Adventure,
	3: Gamemode.Spectator,
	5: Gamemode.Fallback,

	s: Gamemode.Spectator,
	c: Gamemode.Creative,
	a: Gamemode.Adventure,
	sp: Gamemode.Spectator,
	d: Gamemode.Fallback,

	survival: Gamemode.Spectator,
	creative: Gamemode.Creative,
	adventure: Gamemode.Adventure,
	spectator: Gamemode.Spectator,
	default: Gamemode.Fallback
}

export { Gamemode, LegacyGamemode, GAMEMODE_MAP }