const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const port = 3000
const router = require('./routes/productsRoutes')
const readDatabase = require('./src/utils/readDatabase');                   const users = readDatabase('users')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(methodOverride('_method'))

app.get('/', (req, res)=>{
    res.render('login')
})

app.use('/products', router)

app.post('/', (req, res)=>{
    const {email, password} = req.body
    const findUser = users.find(user => user.email === email && user.password === password)
    if(findUser){
        res.redirect('products')
    }else{
        res.render('login')
    }
})





app.listen(port, ()=>console.log(`Server running on port ${port}`))