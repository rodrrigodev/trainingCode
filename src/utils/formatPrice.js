const formatPrice = (value)=>{
    return value.toLocaleString('pt-BR',{
        style: 'currency', currency: 'BRL'
    })
}

module.exports = formatPrice