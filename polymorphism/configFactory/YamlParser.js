import yaml from 'js-yaml';

export default class YamlParser {
    static parse(data) {
        return yaml.load(data);
    }
};