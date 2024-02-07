function are_coordinates_valid(x: number, y: number, z: number): boolean {
	return !isNaN(x) && !isNaN(y) && !isNaN(z)
}

export { are_coordinates_valid }