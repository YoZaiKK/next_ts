import { ReactElement, ReactNode } from "react";

import { NextPage } from "next";

import "../styles/globals.css";
import { AppProps } from "next/app";


/*
Aqui definimos que si una pagina tiene layout, page es de tipo JSX.Element
*/
type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;

};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout || ((page) => page);

	// return <Component {...pageProps} />;
	return getLayout(<Component {...pageProps} />);
}
