const os=require('os')
const user=os.userInfo()
console.log(`the os uptime time is ${os.uptime()} seconds`)

const thisPc={
  ostype:os.type(),
  release:os.release(),
  totalmem:os.totalmem()/(1024*1024),
  freemem:os.freemem()/(1024*1024)
}
console.log(thisPc)