import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  console.log(hello)
  return (
    <div>Home</div>
  );
}
