const fs=require('fs');

const readStream=fs.createReadStream('./docs/blog1.txt',{encoding: 'utf-8'});
 const writeStream=fs.createWriteStream('./docs/blog2.txt')
// readStream.on('data',(chunk)=>{
//     console.log('---------New chunk------');
//     console.log(chunk);

// writeStream.write('\NEW CHUNK\n');
// writeStream.write(chunk);

// })

//piping

readStream.pipe(writeStream);