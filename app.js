const express=require('express');
const path=require("path");
const app=express();
const port=80;


//Express specific stuff
app.use('/static',express.static(path.join(__dirname,"static")));
app.use(express.urlencoded());


//PUG specific stuff
app.set('view engine','pug')  // set template engine as pug
app.set('views',path.join(__dirname,'views'))


//END points
app.get('/',(req,res)=>{
res.status(200).render('index.pug')
})

app.post('/',(req,res)=>{
    var myData=req.body

    var obj={ 'city': myData.city}
res.status(200).render('weather.pug',obj)  
})
app.get('/')


app.listen(port,()=>{    
console.log(`server started at port : ${port}`);
}
)
