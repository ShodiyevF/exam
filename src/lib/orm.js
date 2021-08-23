const path = require('path')
const fs = require('fs')

const readJson = (content) => {
    let data = fs.readFileSync(path.join(__dirname, '../', 'database', content + '.json'), 'utf-8')
    data = data ? JSON.parse(data) : []
    return data
}

readJson('users')

const writeJson = (content, data) => {
    return fs.writeFileSync(path.join(__dirname, '../', 'database', content+'.json'), JSON.stringify(data, null, 4))
}

module.exports = {
    readJson,
    writeJson
}