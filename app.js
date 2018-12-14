let express=require('express')
let app=express()
app.set('view engine', 'ejs')
app.set('views`','./views')
app.use(express.static('./views'))
app.get('/',(req,res)=>{
    res.render('index.ejs',{})
})
app.listen(80,()=>{
 console.log('http://127.0.0.1')
})