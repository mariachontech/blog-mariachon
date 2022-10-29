import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Mariachon Blog" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-3xl font-bold underline">Test de coolaborador!</h1>
			<h1 className="text-3xl font-bold underline">Test de propietario!</h1>
		</div>
	)
}
