import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>fdfdkdfkdf</p>
      <p>kfdkkdf</p>
      <Link href="/ninjas/">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
