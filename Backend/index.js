const express=require('express')
const app =express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const cors = require('cors'); 
app.use(cors());


const Testimony=require('./Testimonial')
app.use('/api/testify',Testimony)

app.listen(4000,(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('listening on port 4000')
    }
})