import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://cryptonait:fEhqvRdJjgC7cpXJ@tgencluster.caeqk.mongodb.net/lolazo?retryWrites=true&w=majority"

async function createDbClient() {
    return await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

export default {
    createDbClient
}