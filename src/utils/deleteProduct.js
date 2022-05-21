const path = require('path')
const fs = require('fs')

const deleteProduct = (id, products) => {
    const filePath = path.join(__dirname, '..', 'database', 'products' + '.json')
    const filtered = products.filter(product=> product.id !== Number(id))
    const filteredJSON = JSON.stringify(filtered, null, ' ')
    return fs.writeFileSync(filePath, filteredJSON)}
module.exports = deleteProduct