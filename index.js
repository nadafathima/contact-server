//importing json server
const jsonserver=require('json-server')

// creating server
const contactServer=jsonserver.create()

//initializing middleware
const middleware=jsonserver.defaults()
const router=jsonserver.router('db.json')

//configuring middleware and router to server
contactServer.use(middleware)
contactServer.use(router)

//setting port number
const PORT=3000 || process.env.PORT

//calling listen method with server for activating server
contactServer.listen(PORT,()=>{
    console.log("Server running at PORT:"+PORT);
})