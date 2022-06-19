const fs=require('fs');

//reading the files

// fs.readFile('./docs/blog.txt',(err,data)=>{
//     if(err)
//     {
//        console.log(err); 
//     }
//     console.log(data.toString());
// });

//writing files
// fs.writeFile('./docs/blog.txt','Hello Mithun how are u',()=>
// {
//     console.log('file written');
// })

//directories
// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets',(err)=>
// {
//     if(err)
//     {
     
//         console.log(err);
        
//     }
//     console.log('folder created')
// });
// }
// else{
//     fs.rmdir('./assets',(err)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

//delete files
if(fs.existsSync('./docs/delete.txt')){
    fs.unlink('./docs/delete.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}