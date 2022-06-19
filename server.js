const http =require('http');

const fs=require('fs');
const { getEventListeners } = require('events');

const server =http.createServer((req,res)=>{
console.log(req.url,req.method);

// set header content type
res.setHeader('Content-Type','text/html');

let path ='./views/';
switch(req.url)
{
    case '/':
      path += 'index.html';
      res.statusCode=200;
      break;
    case '/about':
        path += 'about.html';
        res.statusCode=200;
        break; 

    case '/about-me':
        path += 'about.html';
        res.statusCode=301;
        res.setHeader('Location','/about');
        break;    
    default:
        path += '404.html';
        res.statusCode=404;
        break;         
}



fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
    }else
    res.write(data);
    res.end();
    //if write a single data we can use res.end(data); 
})

});

server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
})