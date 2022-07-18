export default class GoogleStorage {
    constructor() {
        this.elements = new Map();
    }

    get(key) {
        return this.elements.get(key)
    }
    set(key, value) {
        this.elements.set(key, value);
    }
    count() {
        throw new Error(`we have no count here`)
    }
}