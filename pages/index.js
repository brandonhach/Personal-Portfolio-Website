import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Section from "@/components/Section/Section";
import Footer from "@/components/Footer/Footer";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
	return (
		<>
			<Header></Header>
			<About></About>
			<Section></Section>
			<Portfolio></Portfolio>
			<Contact></Contact>
			<Footer></Footer>
		</>
	);
}
