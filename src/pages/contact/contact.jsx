import "../../styles/contact.css";
import Header from "../../components/header";

function Contact() {
    return (
        <div>
            <Header />
            <main>
                <p>Paris based photographer specialized in portrait and fashion.</p>

                <p>For any inquiries : <a href="mailto:clarasgui@gmail.com">clarasgui@gmail.com</a></p>

                <p>Represented in Italy by <a href="https://www.fisheyeagency.com/" target="_blank">Fisheye Agency</a></p>

                <p>Contact : <a href="mailto:sara.mundici@fisheyeagency.com">sara.mundici@fisheyeagency.com</a></p>

                <p>Selected clients : <i>Dior, New Balance, Levi's, Axel Arigato, Sarenza, Tara Jarmon...</i></p>
            </main>
        </div>
    );
}

export default Contact;