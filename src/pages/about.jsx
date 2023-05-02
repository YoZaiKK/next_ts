import styles from "../styles/MainLayout.module.css";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { LightLayout } from "../components/layouts/LightLayout";

export default function AboutPage() {
	return (
		<>
			<h1>About Page</h1>
			<h1 className={styles.title}>
				{/* Ir a <a href="/">Home</a> */}
				Ir a <Link href="/">Home</Link>
			</h1>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>src/pages/about.js</code>
				</p>
			</div>
		</>
	);
}
AboutPage.getLayout = function getLayout(page) {
	return (
		<MainLayout>
			<LightLayout>{page}</LightLayout>
		</MainLayout>
	);
};
