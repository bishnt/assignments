var fs = require('fs');
fs.readFile("week-2/01-async-js/easy/a.txt",'utf-8',(err,data)=>{
    if (err){
        console.error("error reading the file",err);
    }
    else{
        console.log(data);
    }
})
let s=0;
for(let i=0;i<1000;i++)
{
 s=s+i
}
console.log(s);