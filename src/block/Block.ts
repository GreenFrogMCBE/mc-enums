class Block {
    public id: number

    public name: string

    public is_transparent() {
        return this.id === 0
    }

    public get get_id(): number {
        return this.id
    }
    
    public get get_name(): string {
        return this.name
    }

    public set set_id(id: number) {
        this.id = id
    }

    public set set_name(name: string) {
        this.name = name
    }
}

export { Block }
