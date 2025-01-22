import {Client} from "pg";

const pgClient = new Client("postgresql://neondb_owner:2KtBisj1SoXG@ep-icy-heart-a53sy6sw.us-east-2.aws.neon.tech/neondb?sslmode=require")

async function main(){
  await pgClient.connect();
  const response = await pgClient.query("SELECT * FROM users;")
  console.log(response.rows);

}
main()