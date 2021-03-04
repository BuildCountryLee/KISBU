#! /usr/bin/env node
const { Command } = require('commander');
const serve = require('./commands/serve');
const build = require('./commands/build');
const buildSite = require('./commands/build-site');

const program = new Command();

program
  .command('serve')
  .description('run kis-bu project by webpack-server')
  .action(serve);

// TODO
program
  .command('create <name>')
  .description('create new business component')
  .action(name => {
    console.log(name);
  });

program
  .command('build')
  .description('build kis-bu')
  .action(build);

program
  .command('build-site')
  .description('build site in production mode')
  .action(buildSite);

program.parse();
