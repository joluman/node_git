// read/write file using synchronous method

const {readFileSync,writeFileSync}=require('fs')
// reading text from a file 
const readfirst=readFileSync('./Content/Firstfile.txt', 'utf8')
const readsecond=readFileSync('./Content/Second.txt','utf8')
console.log(readfirst)
console.log(readsecond)


//writing file from node, creating it if doesn't exist
writeFileSync('./Content/written-by-node.txt','this is written from node app')
console.log('file written successfully')

//appending existing file
writeFileSync('./Content/written-by-node.txt',' file appended',{flag:'a'})