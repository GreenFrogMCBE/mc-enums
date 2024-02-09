const PROTOCOL_LIST = {
    "1.20.50": 630,
    "1.20.40": 622,
    "1.20.30": 618,
    "1.20.10": 594,
    "1.20.0": 589,
    "1.19.80": 582,
    "1.19.70": 575,
    "1.19.63": 568,
    "1.19.60": 567,
    "1.19.51": 559,
    "1.19.50": 559,
    "1.19.41": 557,
    "1.19.40": 557,
    "1.19.31": 554,
    "1.19.30": 554,
    "1.19.22": 545,
    "1.19.21": 545,
    "1.19.20": 544,
}

const DEFAULT_PROTOCOL: number = 0

function get_protocol(version: string) {
    return this.PROTOCOL_LIST[version] || this.DEFAULT_PROTOCOL
}

export {
    PROTOCOL_LIST,
    DEFAULT_PROTOCOL,
    get_protocol
}