// > mongo 127.0.0.1/SigmaDB SeedUsers.js
//

printjson(db.adminCommand('listDatabases'));

printjson(db.getCollectionNames())

cursor = db.User.find();
printjson(cursor.hasNext())
while ( cursor.hasNext() ) {
   console.log( cursor.next() );
}