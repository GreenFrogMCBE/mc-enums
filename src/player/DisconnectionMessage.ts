enum Message {
    ServerFull = "disconnectionScreen.serverFull",
    NoReason = "disconnectionScreen.noReason"
}

class DisconnectionMessage {
    public message: string

    constructor(_message: string) {
        this.message = _message
    }

    public toString() {
        switch (this.message) {
            case Message.ServerFull:
                return "Wow this server is popular! Check back later to see if space opens up."
            case Message.NoReason:
                return "You were disconnected"
            default:
                return this.message
        }
    }
}

export { DisconnectionMessage }