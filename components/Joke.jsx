export default function Joke(props) {
    return(
        <main>
            <h1>{props.setup}</h1>
            <h2>{props.punchline}</h2>
        </main>
    )
}