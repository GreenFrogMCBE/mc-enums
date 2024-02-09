class Block {
    public id: number

    public name: string

    public is_transparent() {
        return this.id === 0
    }
}

export { Block }
