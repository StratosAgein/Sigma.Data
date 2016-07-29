// DB: 127.0.0.1/SigmaDB
//
// Status:
//      0 : Disabled
//      1 : Active
//      2 : Inactive
//      3 : Deleted
//

db.User.insert({
    "_id" :     ObjectId("51e0373c6f35bd826f47e9a1"),
    Name:       'Camilo Rodriguez',
    Lastname:   'Rodriguez',
    Email:      'camiepisode@outlook.com',
    Password:   'CAMILO',
    Status:     1,
    Phone:      '+573103494806',
    Roles:
    [
                {
                    Group:      'superadmin',
                    IsPrimary: true
                },
                {
                    Group:      'buyer',
                    IsPrimary: false
                }
    ],
    age: 23
})