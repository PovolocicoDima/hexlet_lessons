export default class TcpConnection {
    constructor(ip, port) {
        this.states = {
            disconnected: DisconnectedState,
            connected: ConnectedState,
        };
        this.ip = ip;
        this.port = port;
        this.buffer = [];
        this.setState('disconnected');
    }

    getCurrentState() {
        return this.state.getName();
    }

    connect() {
        this.state.connect();
    }

    disconnect() {
        this.state.disconnect();
    }

    write(data) {
        this.state.write(data);
    }

    setState(name) {
        this.state = new this.states[name](this);
    }
}