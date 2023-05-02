import styles from "../../styles/MainLayout.module.css"; 
import { MainLayout } from "../../components/layouts/MainLayout";
import Link from "next/link";
 

export default function ContactPage() { 
	return (
		<MainLayout> 
				<h1 >Contact Page</h1>
				<h1 className={styles.title}>
				{/* Ir a <a href="/">Home</a> */}
				Ir a <Link href="/">Home</Link>
			</h1>
				<div className={styles.description}>
					<p>
						Get started by editing&nbsp;
						<code className={styles.code}>
							src/pages/contact.js
						</code>
					</p>
				</div> 
		</MainLayout>
	);
}
