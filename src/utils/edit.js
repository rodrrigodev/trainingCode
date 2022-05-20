const fs = require('fs')
const path = require('path')

function edit(productFound, products, edited){
    const filePath = path.join(__dirname, '..', 'database', 'products' + '.json')
    const position = products.indexOf(productFound)
    const replaceProduct = products.splice(position, 1, edited)
    const replaceProductJSON = JSON.stringify(replaceProduct, null, ' ')
    return  fs.writeFileSync(filePath, replaceProductJSON)
}
module.exports = edit