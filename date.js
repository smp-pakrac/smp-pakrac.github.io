import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://za:sladanasanic@cluster0.27pis.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
	const collection = client.db("smpcoll").collection("smpcoll");
	// perform actions on the collection object
	client.close();
});