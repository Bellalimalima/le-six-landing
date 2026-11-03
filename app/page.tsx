import Hero from "../components/Hero";
// import About from "../components/About";
// import Amenities from "../components/Amenities";
import NavBar from "../components/NavBar";
import Apartaments from "../components/Apartaments";
import ContactForm from "../components/ContactForm";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="font-sans text-gray-900">
      <NavBar />
      <Hero />
      <Apartaments />
      <ContactForm />
     
    </main>
  );
}
