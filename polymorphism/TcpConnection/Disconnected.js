export default class Disconnected {
    // BEGIN (write your solution here)
    constructor(connection) {
        this.connection = connection;
    }

    getName() {
        return 'disconnected';
    }

    connect() {
        this.connection.setState('connected');
    }

    disconnect() {
        throw new Error('Connection already disconnected');
    }

    write() {
        throw new Error('It is not possible write to closed connection');
    }
    // END
}