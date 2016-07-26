// DB: 127.0.0.1/SigmaDB
db.User.insert({
    "_id" : ObjectId("51e0373c6f35bd826f47e9a1"),
    name:'Camilo Rodriguez',
    email:'camiepisode@outlook.com',
    password:'CAMILO',
    roles:[
        {
            name:'superadmin',
        }
    ],
    age: 23
})