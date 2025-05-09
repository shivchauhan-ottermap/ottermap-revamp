import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Values from '../components/Values'
import Testimonial from '../components/Testimonial'
import UseCases from '../components/UseCases'
import WalkThrough from '../components/WalkThrough'
import Banner from '../components/Banner'
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'
import ProblemAndSolution from '../components/ProblemAndSolution'
import BookMeeting from '../components/BookMeeting'

const Landing = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ProblemAndSolution />
            <WalkThrough />
            <Features />
            <Values />
            <Testimonial />
            <UseCases />
            <BookMeeting />
            <Banner />
            <FAQs />
            <Footer />
        </div>
    )
}

export default Landing
