class Console {
    static write(text) {
        process.stdout.write(text)
    }

    static read(event, callback) {
        process.stdin.on(event, callback)
    }
}

module.exports = Console;