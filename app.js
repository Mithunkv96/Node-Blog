const express=require('express');

const app=express();

//register view engine
app.set('view engine','ejs');

//listen to request
app.listen(3000);

app.get('/',(req,res)=>{
 const blogs=[
    {title:'Mithun how are you',snippet:'I am fine how about u'},
    {title:'Mahilan how are you',snippet:'I am fine how about u'},
    {title:'Madhesh how are you',snippet:'I am fine how about u'},

];
    // res.send('<p>home page</p>');
    //res.sendFile('./views/index.html',{root: __dirname})
    res.render('index',{title:'Home',blogs  });
});

app.get('/about',(req,res)=>
{
    // res.send('<p>about page</p>');
   // res.sendFile('./views/about.html',{root:__dirname})
   res.render('about',{title:'About'})
});

app.get('/404',(req,res)=>
{
    
   // res.sendFile('./views/contact.html',{root:__dirname})
   res.render('404',{title:'Error'})
});
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new blog'});
})

//404 error
//its should be used in bottom only because if we use it in center 
//then after get fired the code one by one then it  will be executed
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname})
})



