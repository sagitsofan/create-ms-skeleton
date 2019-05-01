#!/usr/bin/env node

const commander = require('commander');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs-extra');
const packageJson = require('../package.json');
const execSync = require('child_process').execSync;

let projectName;

const program = new commander.Command(packageJson.name)
    .version(packageJson.version)
    .arguments('<project-directory>')
    .usage(`${chalk.green('<project-directory>')} [options]`)
    .action(name => {
        projectName = name;
    })
    .parse(process.argv);

if (typeof projectName === 'undefined') {
    console.error('Please specify the microservice name:');
    console.log(`  ${chalk.cyan(program.name())} ${chalk.green('<microservice-name>')}`);
    console.log();
    console.log('For example:');
    console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-new-microservice')}`);
    console.log();
    process.exit(1);
}

createApp(projectName);

async function createApp(name) {
    const root = path.resolve();
    const installationRootPath = path.join(__dirname, '..');

    console.log(`Creating new Microservice: '${chalk.green(name)}'.`);

    /**
     *    Copy the template folder into the current folder
    **/
    fs.copySync(`${installationRootPath}\\template\\`, root);

    /**
     *    Replace placeholders inside the template files
    **/
    arrPH = ['[MS_NAME]'];
    arrFiles = ['index.ts', 'server//server.ts'];

    arrPH.forEach(ph => {
        arrFiles.forEach(file => {
            const filePath = `src//${file}`;
            let sourceFile = fs.readFileSync(filePath).toString();
            sourceFile = replaceAll(sourceFile, ph, name);
            fs.writeFile(filePath, sourceFile);
        });
    });

    console.log('Compiling...');

    execSync('tsc')

    console.log('Done.');
}

function replaceAll(str, term, replacement) {
    return str.replace(term, replacement);
}