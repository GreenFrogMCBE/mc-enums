function isDimensionIDValid(id: number) {
    return (id <= 3 && id >= 0)
}

enum DimensionID {
    Overworld,
	Nether,
	End
}

export { isDimensionIDValid, DimensionID }