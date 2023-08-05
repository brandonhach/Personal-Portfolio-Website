import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Section from "@/components/Section/Section";
import Footer from "@/components/Footer/Footer";
import Portfolio from "@/components/Portfolio/Portfolio";
import { useInView } from "react-intersection-observer";

export default function Home() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	return (
		<>
			<Header></Header>
			<About></About>
			<Section></Section>
			<div ref={ref}>{inView && <Portfolio></Portfolio>}</div>
			<div ref={ref}>{inView && <Contact></Contact>}</div>
			<Footer></Footer>
		</>
	);
}
