import express from 'express'

const PORT = 8888; //app runs on this port

const app = express() // instantiating the express app

app.get('/ping', function(request, resolve){
    //request is everything the client tells the server
    //resolve when the server talks back to the client 
    //get means the request will hold everything from the client, where its calling from, anything in the parameters, or body, the query
    //server backend is like a librarian, a customer comes to the library hey can I get all the books starting with X 
    //the librarian goes to the database and goes OK give me all the books that start with X and then they return it to the client
    



})

