import Link from "next/link";
import Layout from "../components/Layout";
const metadata = {
  title: "Home",
  description: "Just a home page",
  author: "Jorn",
  keywords: "home, index, page",
};

export default function Home() {
  return (
    <Layout metaData={metadata}>
      <h1>Welcome to 'Home'</h1>
      <Link href="/results">View Results</Link>
    </Layout>
  );
}
