const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://127.0.0.1:27017");

app.use(cors());
app.use(express.json())

const dbName = "edoti";
const collectionName = "projects";

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/showProjects", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const data = await collection.find().toArray();

    console.log(data);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
  finally{
    client.close()
  }
});

app.post("/assignProject",async(req,res)=>{
  try{
    const data= req.body
    const {projectTitle,projectDetails,activeTeams} = data;
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    for(let i of activeTeams){
      console.log(`this is projectTitle ${projectTitle}`)
      console.log(`this is projectDetails ${projectDetails}`)
      const documents = {
        team: i,
        projectTitle,
        projectDetails,
      }
      const add = await collection.insertOne(documents)
      console.log("success",i)
    }
    res.send("success")
  }
  catch(e){
    console.log(e)
  }
  finally{
    client.close()
  }

})

app.listen(5000, () => console.log("servwer running on 5000 port"));
