import { client } from "@repo/db/client";




export default async function Home() {
  const user = await client.user.findMany()
  return (
   <div>
    {JSON.stringify(user)}
   </div>
  );
}
