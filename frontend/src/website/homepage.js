import AnimationRevealPage from 'helpers/AnimationRevealPage';
import React, { Component } from 'react';
import Hero from "components/hero/Hero-Section-Homepage";
import Slider from "components/cards/ThreeColSlider";
import Features from "components/features/DashedBorderSixFeatures";
import Footer from "components/footers/MiniCenteredFooter";

function Home() {
    return (
        <AnimationRevealPage>
            <Hero />
            <Slider />
            <Features />
            <Footer />
        </AnimationRevealPage>
    );
}

export default Home;