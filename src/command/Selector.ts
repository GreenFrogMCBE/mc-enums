enum Selector  {
	NearestPlayer = "@p",
	RandomPlayer = "@r",
	AllPlayers = "@a",
	AllEntities = "@e",
	Self = "@s",
    Initiator = "@initiator",

    /**
     * Education edition only. 
     */
    PlayerAgent = "@c",
    AllAgents = "@v"
}

export { Selector }