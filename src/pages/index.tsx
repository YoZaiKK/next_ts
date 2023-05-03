import Link from "next/link";

import styles from "../styles/MainLayout.module.css"; 
import { MainLayout } from "../components/layouts/MainLayout";

export default function HomePage() { 
	return ( 
		<MainLayout>
			<h1>Home Page</h1>
			<h1 className={styles.title}>
				{/* Ir a <a href="/about">About</a> */}
				Ir a <Link href="/about">About</Link>
			</h1>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>
						src/pages/index.js
					</code>
				</p>
			</div>
		</MainLayout>
	);
}
