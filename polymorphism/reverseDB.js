// my

class InMemoryKV1 {
    constructor(obj) {
        this.obj = obj;
    }

    get(key, defaultValue = null) {
        if (Object.hasOwn(this.obj, key)) {
            return this.obj[key];
        } else {
            return defaultValue;
        }
    }

    set(key, value) {
        this.obj[key] = value;
    }

    unset(key) {
        if (Object.hasOwn(this.obj, key)) {
            delete this.obj.key
        }
    }
}

const swapKeyValueFunc = (obj) => {
    const newObj = {};
    const objKeys = Object.keys(obj);
    objKeys.forEach(key => {
        const value = obj.get(key);
        newObj[value] = key;
    });
}

// teacher
import _ from 'lodash'

export default class InMemoryKV {
    constructor(init = {}) {
        this.map = _.cloneDeep(init);
    }

    set(key, value) {
        this.map[key] = value;
    }

    unset(key) {
        this.map = _.omit(this.map, key);
    }

    get(key, defaultValue = null) {
        return _.get(this.map, key, defaultValue);
    }

    toObject() {
        return _.cloneDeep(this.map);
    }
}

const swapKeyValue = (map) => {
    const data = map.toObject();
    const entries = Object.entries(data);
    entries.forEach(([key]) => map.unset(key));
    entries.forEach(([key, value]) => map.set(value, key));
};

const map = new InMemoryKV({ key: 10 });
console.log(map)
map.set('key2', 'value2');
swapKeyValue(map);
console.log(map.get('key')); // null