const path=require('path')
// joins those paths in parameter
const filepath=path.join('bigfolder','subfolder','test.txt')
console.log(filepath)
//shows the last file in the file tree
const base=path.basename(filepath)

// shows absolute path(the path where the node app is running on)
const absolute = path.resolve(__dirname,'Content','Subfolder','Test.txt')
console.log(absolute)