enum PlayStatus {
    PlayerSuccess = "login_success",
    PlayerSpawn = "player_spawn",
    FailedClient = "failed_client",
    FailedServer = "failed_server",
    FailedSchoolAccessDenied = "failed_invalid_tenant",
    FailedEducationEditionRequired = "failed_edu_vanilla",
    FailedVanillaBedrockRequired = "failed_edu_vanilla",
    FailedServerFull = "failed_server_full",
}

function play_status_to_string(status: PlayStatus): string | undefined {
    switch (status) {
        case PlayStatus.PlayerSuccess:
        case PlayStatus.PlayerSpawn:
            return undefined
        case PlayStatus.FailedClient:
            return "Could not connect: Outdated client!"
        case PlayStatus.FailedServer:
            return "Could not connect: Outdated server!"
        case PlayStatus.FailedSchoolAccessDenied:
            return "Unable to connect to the world. Your school does not have access to this server."
        case PlayStatus.FailedEducationEditionRequired:
            return "The server is not running Minecraft: Education Edition. Failed to connect."
        case PlayStatus.FailedVanillaBedrockRequired:
            return "The server is running an incompatible edition of Minecraft. Failed to connect."
        case PlayStatus.FailedServerFull:
            return "Wow, this server is popular! Check back later to see if space opens up."
        default:
            throw new Error("Unknown play status: " + status)
    }
}

export { PlayStatus, play_status_to_string }
