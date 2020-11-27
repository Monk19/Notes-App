const fs = require('fs')
const { array } = require('yargs')
const chalk = require('chalk')


const addNote = function(title,body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    debugger
    if(duplicateNotes.length === 0){
        
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green('NEW NOTE TAKEN Chechaa!!'))

    } else{
        console.log(chalk.yellow.bold('Machaaa Title Should be different.....'))
    }
}

const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}


const loadNotes =function(){
    try{
    const databuffer = fs.readFileSync('notes.json');
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON)
    } catch(error){
        return []

    }
}

const removeNote = function(title) {
    const notes= loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !=  title
    })
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed CHECHA..! :)'))
    }else{
        console.log(chalk.red.inverse('Note NOT Found :('))
    }
    saveNotes(notesToKeep)   
}    

const listNotes = ()=>{
    const retrivedNotes = loadNotes()
    if(retrivedNotes.length ===0){
        console.log("No NOtes Taken")
    }
    retrivedNotes.forEach((element) => {
        console.log(element.title)
        console.log(element.body)
    });
}

const fetchNotes = (title)=>{
    const fetch = loadNotes();
    fetch.forEach((ele)=>{
        if(ele.title === title){
            console.log(ele.title)
            console.log(ele.body)
        }
    })
}

module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    fetchNotes:fetchNotes
}


