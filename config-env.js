const { writeFileSync } = require('fs');
let params = process.argv.slice(2).toString();
envValues = `ID=${params}`
writeFileSync(`${__dirname}/.env`, envValues);
console.log(`${params} as ID .env set up successfully`);
console.log('Generating completed.');