import Header from "./components/Header"
import Entry from "./components/Entry"
import Contact from "./components/ContactCard"
import Joke from "./components/Joke"

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Entry />
                {/* <div className="contacts">
                    <Contact
                        img="./images/mr-whiskerson.png"
                        name="Mr. Whiskerson"
                        phone="(212) 555-1234"
                        email="mr.whiskaz@catnap.meow"
                    />
                    <Contact
                        img="./images/fluffykins.png"
                        name="Fluffykins"
                        phone="(212) 555-2345"
                        email="fluff@me.com"
                    />
                    <Contact
                        img="./images/felix.png"
                        name="Felix"
                        phone="(212) 555-4567"
                        email="thecat@hotmail.com"
                    />
                    <Contact
                        img="./images/pumpkin.png"
                        name="Pumpkin"
                        phone="(0800) CAT KING"
                        email="pumpkin@scrimba.com"
                    />
                </div> */}
                    <Joke
                        setup="why did the chicken cross the road?"
                        punchline="other side!"
                    />
                   <Joke
                        setup="why joke 2 lol"
                        punchline="xD side!"
                    />
                    
            </main>
        </>
    )
}