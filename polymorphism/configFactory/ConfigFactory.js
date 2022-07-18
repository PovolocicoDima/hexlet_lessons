import path from 'path';
import fs from 'fs';
import JsonParser from './parsers/JsonParser.js';
import YamlParser from './parsers/YamlParser.js';
import Config from './Config.js';

// my
export default class ConfigFactory1 {
    static factory(filePath) {
        const extension = path.extname(filePath).slice(1);
        console.log(extension);
        const fileContent = fs.readFileSync(filePath);
        const mapping = {
            json: (data) => new Config(JsonParser.parse(data)),
            yml: (data) => new Config(YamlParser.parse(data)),
            yaml: (data) => new Config(YamlParser.parse(data)),
        };
        const result = mapping[extension](fileContent);
        return result;
    }
};

// teacher

const mapping = {
    yaml: YamlParser,
    yml: YamlParser,
    json: JsonParser,
};

class ConfigFactory {
    static factory(filePath) {
        const type = path.extname(filePath).slice(1);
        const parser = new mapping[type]();

        const rawData = fs.readFileSync(filePath).toString();
        const data = parser.parse(rawData);

        return new Config(data);
    }
}