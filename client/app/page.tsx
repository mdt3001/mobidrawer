import { redirect } from "next/navigation";



export default function Home() {
  redirect("/LandingPage");
  return (
    <div className="mt-0 font-light">
    </div>
  );
}
