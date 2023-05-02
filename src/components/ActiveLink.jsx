import { useRouter } from "next/router";
import Link from "next/link";

const style = {
	color: "cyan",
	textDecoration: "underline",
	// making it bold
	fontWeight: "bold",
};

export const ActiveLink = ({ text, href }) => {
	const router = useRouter();
	console.log(router.pathname);
	return (
		<Link href={href} legacyBehavior>
			<a style={router.pathname == href? style : null}>{text}</a>
		</Link>
	);
};
