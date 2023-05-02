import Head from "next/head"; 
import styles from "../../styles/MainLayout.module.css";

import { Inter } from "next/font/google";
import { Navbar } from "../Navbar.jsx";


const inter = Inter({ subsets: ["latin"] });

export const MainLayout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Home - Memo</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className={`${styles.main} ${inter.className}`}>{children}</main>
		</>
	);
};
