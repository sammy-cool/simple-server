// require - import 
// node - common js module loader, react - es6 module loader
// const varName = require('pakageName')
const mongoose = require('mongoose')
const http = require('http')
const port = 3033
const server = http.createServer(function(request, response){
    if(request.url === '/'){
        response.end('welcome to the website')
    }else if(request.url === '/about'){
        response.end('about us page')
    }else if(request.url === '/users'){
        const users = [
            {id: 1, name: 'john'},
            {id:2, name: 'steve'}
        ]
        response.end(JSON.stringify(users))
    }else if (request.url === '/sys_time'){
       const time = new Date()
        response.end(JSON.stringify({value: time}))
    }else{
        response.end('page that are you looking for not found')
}
})

    mongoose.connect('mongodb://localhost:27017/feb2020')
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log('failed to connect to db', err)
    })

server.listen(port, function(){
    console.log('server is running on port', port)
})