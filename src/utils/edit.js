const fs = require('fs')
const path = require('path')

function edit(products, edited){
    const filePath = path.join(__dirname, '..', 'database', 'products' + '.json')
    const editMap = products.map((product)=> product.id === edited.id ? {...edited}: product)
    const editJSON = JSON.stringify(editMap, null, ' ')
    return  fs.writeFileSync(filePath, editJSON)
}
module.exports = edit