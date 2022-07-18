export default class Connected {
    // BEGIN (write your solution here)
    constructor(connection) {
        this.connection = connection;
    }

    connect() {
        throw new Error('Connection has established already');
    }

    disconnect() {
        this.connection.setState('disconnected');
    }

    write(data) {
        this.connection.buffer.push(data);
    }

    getName() {
        return 'connected';
    }
    // END
}