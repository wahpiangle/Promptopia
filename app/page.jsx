import Feed from "@components/Feed"
import { Suspense } from "react"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover & Share
                <br />
                <span className="orange_gradient text-center">AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">Promptopia is a tool for people to discover, create and share creative prompts</p>
            <Suspense fallback={<span className="loader"></span>}>
                <Feed/>
            </Suspense>
        </section>
    )
}

export default Home