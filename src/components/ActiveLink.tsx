import { CSSProperties, FC } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

const style: CSSProperties = {
	color: "cyan",
	textDecoration: "underline",
	// making it bold
	fontWeight: "bold",
};

interface Props {
	text: string;
	href: string;
}

export const ActiveLink: FC <Props> = ({ text, href }) => {
	const router = useRouter(); 
	return (
		<Link href={href} legacyBehavior>
			<a style={router.pathname == href? style : undefined}>{text}</a>
		</Link>
	);
};
