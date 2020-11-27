const chalk = require('chalk');
const fs = require('fs');
const { demandOption } = require('yargs');
const yargs = require('yargs');
const { listNotes } = require('./notes.js');
const notes = require('./notes.js')
//add command
yargs.command({
    command:'Add', 
    describe:'Taking note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{  
            describe:'Regarding the title',
            demandOption: true,
            type: 'string'
        }
    },

    handler : function (argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//remove command
yargs.command({ 
    command:'remove',
    describe:'Remove Note', 
    builder:{
        title:{
            describe:'Remove Note',
            demandOption: true,
            type:'string'
        }
    },
    handler : function(argv){
        notes.removeNote(argv.title)
    }
})
//list command

yargs.command({ 
    command:'list',
    describe:'List your notes',
    handler:function(argv){
        notes.listNotes(argv)
    }
})

//read command
yargs.command({
    command:'read',
    describe:'Reading note',
    builder:{
        title:{
            describe:'Note to find',
            demandOption: true,
            type:'String'
        }
    },
    handler:function(argv){
        console.log('Fetching Note......')
        notes.fetchNotes(argv.title)
    }
})
yargs.parse()
// console.log(yargs.argv)

