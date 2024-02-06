enum DimensionID {
    Overworld = 1,
	Nether = 2,
	End = 3
}

enum Dimension {
    Overworld = "overworld",
	Nether = "nether",
	End = "end"
}

function is_dimension_id_valid(id: number) {
    return (id <= 3 && id >= 0)
}

export { is_dimension_id_valid, DimensionID, Dimension }