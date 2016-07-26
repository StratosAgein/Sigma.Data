var conn = new Mongo();
db = conn.getDB("SigmaDB");

db.adminCommand('listDatabases')

	
db.getCollectionNames()