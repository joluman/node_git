// read/write file using asynchronous method
const {readFile,writeFile}=require('fs')
// reading file ... it's callback function
readFile('./Content/Firstfile.txt','utf8',(err,result)=>{
  if (err){
    console.log('error')
    return
  }
  console.log(result)
})
//writing file
writeFile('./Content/written-by-async.txt',' file created',(err,result)=>{
  if (err){
    console.log('error')
    return 
  }
  console.log(result)
})