import { FC, ReactNode } from "react";

import { Inter } from "next/font/google";

import styles from "../../styles/MainLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const LightLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div
			style={{
				backgroundColor: "rgba(255, 255, 255, 0.5)",
				borderRadius: "12px",
				padding: "10px",
			}}
		>
			<h3>
				<code>LightLayout</code>
			</h3>

			<main className={`${styles.main} ${inter.className}`}>{children}</main>
		</div>
	);
};
