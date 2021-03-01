#! /usr/bin/env node
const { Command } = require('commander');
const build = require('./commands/build');

const program = new Command();

// TODO
program
  .command('dev')
  .description('run kis-bu project')
  .action(function () {
    console.log(123);
  });

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

program.parse();
