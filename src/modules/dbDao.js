import dbConnection  from './dbConnection.js'

async function createDbDao() { 
    const client = await dbConnection.createDbClient()
    try {
        console.log("Connecting to mongodb...")
        await client.connect()
        console.log("Connection successful!")
    } catch (e) {
        throw new Error("Connection to mongodb failed")
    }

    const db = await client.db("lolazo")
    const champs = await db.collection("champions").find().toArray()
    const champions = await Object.values(champs[0].data)
    return{
            getAllChampions: async () => {
                return await champions
            },
            getChampionNameByKey: async (key) => {
                let champ = champions.find(e => e.key == key)
                return champ.name
            },
            getChampionImageByKey: async (key) => {
                let champ = champions.find(e => e.key == key)
                return `/imgChampions/${champ.image.full}`
            },
            close: async () => {
                await client.close()
                console.log("Connection to mongodb closed")
            }
        }
}
export default { createDbDao }
