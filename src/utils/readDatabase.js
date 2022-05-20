const fs = require('fs')
const path = require('path')

const readDatabase = (fileName)=>{
    const filePath = path.join(__dirname, '..', 'database', fileName + '.json')
    const readFile = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(readFile)
}

module.exports = readDatabase