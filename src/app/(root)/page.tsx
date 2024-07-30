import { getServerAuthSession } from "@/server/auth";


export default async function HomePage() {

  const user = await getServerAuthSession()

  return (
    <div>
      {user?.user.name}
    </div>
  );
}
