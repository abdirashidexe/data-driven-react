import Header from "./components/Header"
import Entry from "./components/Entry"
import Contact from "./components/ContactCard"
import Joke from "./components/Joke"
//import mrWhiskerson from "./images/mr-whiskperson.png"

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Entry />

                <Entry 
                    img={{
                        src: "https://scrimba.com/links/travel-journal-japan-image-url",
                        alt: "Mount Fuji" 
                    }}
                    title="Mount Fuji"
                    country="Japan"
                    googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                    dates="12 Jan, 2021 - 24 Jan, 2021"
                    text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                />

                {/* <div className="contacts">
                    <Contact
                        img="{nrWhiskerson}"
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