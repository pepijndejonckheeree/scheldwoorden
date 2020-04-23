const contentful = require("contentful-management")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})

const storage = new Map()

exports.handler = async function(event, context) {
  try {
    
    const id = event.queryStringParameters.id.replace("/", "")
    let scheldpartij

    if(storage.has(id)) {

      scheldpartij = storage.get(id)
    }else{
      console.log("id", id)

      const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
      const environment = await space.getEnvironment("master")
      const entry = await environment.getEntry("scheldwoord", scheldpartij.id) 

      scheldpartij =  {
        from: entry.fields.from["eng-US"],
        scheldwoord: entry.fields.scheldwoord["eng-US"]
      }
      storage.set(id, scheldpartij)
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.joke })
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
