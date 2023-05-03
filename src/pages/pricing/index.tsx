import styles from "../../styles/MainLayout.module.css";
import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function PricingPage() {
	return (
		<MainLayout>
			<h1>Pricing Page</h1>
			<h1 className={styles.title}>
				{/* Ir a <a href="/about">About</a> */}
				Ir a <Link href="/contact">Contact</Link>
			</h1>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>src/pages/pricing.js</code>
				</p>
			</div>
		</MainLayout>
	);
}
