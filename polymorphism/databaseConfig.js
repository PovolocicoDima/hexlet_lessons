// my

export default class DatabaseConfigLoader {
    constructor(path) {
        this.path = path;
    }

    load(env) {
        const fileName = `database.${env}.json`;
        const pathToFile = path.join(this.path, fileName);
        const rawConfig = fs.readFileSync(pathToFile);
        const result = JSON.parse(rawConfig);
        if (Object.hasOwn(result, 'extend')) {
            const newConfig = this.load(result.extend)
            const unionConfig = { ...newConfig, ...result };
            delete unionConfig.extend;
            return unionConfig;
        } else {
            return result;
        }
    }
}

// teacher

class test {
    constructor(pathToConfigs) {
        this.pathToConfigs = pathToConfigs;
    }

    load(env) {
        const fileName = `database.${env}.json`;
        const filePath = path.join(this.pathToConfigs, fileName);
        const raw = fs.readFileSync(filePath);
        const rawConfig = JSON.parse(raw);
        const { extend, ...config } = rawConfig;

        if (!Object.hasOwn(rawConfig, 'extend')) {
            return rawConfig;
        }

        return { ...this.load(extend), ...config };
    }
}