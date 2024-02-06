enum Gamemode {
	CREATIVE = "creative",
	SURVIVAL = "survival",
	ADVENTURE = "adventure",
	SPECTATOR = "spectator",

	/** Fallbacks to the default world gamemode */
	FALLBACK = "fallback",
	DEFAULT = "fallback",
}

enum LegacyGamemode {
    SURVIVAL = 0,
	CREATIVE = 1,
	ADVENTURE = 2,

	/** Fallbacks to the default world gamemode */
	FALLBACK = 5,
	DEFAULT = 5,

    /** 1.19.50+ */
	SPECTATOR = 6,
}

export { Gamemode, LegacyGamemode }