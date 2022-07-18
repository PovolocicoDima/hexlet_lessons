import fs from 'js';

const configFileNamesByEnv = {
    development: 'database.dev.json',
    production: 'database.prod.json',
    test: 'database.test.json'
};

// first
const fileName1 = configFileNamesByEnv[env];
const raw = fs.readFileSync(fileName1);
const config = JSON.parse(raw);

// second 

const fileName2 = `database.${env}.json`;
const raw2 = fs.readFileSync(fileName2);
const config2 = JSON.parse(raw2); 