import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import devnice from "../public/Images/dev-nice.jpg";
import { Metadata } from "next";
import HeavyComponent from "./components/HeavyComponent";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <Image src={devnice} alt="a nice dev" />
      <HeavyComponent />
    </main>
  );
}
//here we can over write the metadata defined in layout.tsx for better seo
/* export const metadata: Metadata = {
   title: '...'
  }*/
//for a dynamic route we have to generate metadata dynamically
/*
export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("");
  //then return something like
  return {
    title: "product.title",
  };
}
*/
