import React, { Component } from 'react';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from 'components/headers/light.js'
import MainFeature from "components/features/VerticalWithAlternateImageAndText-About.js";
import Footer from "components/footers/Home-Footer";

import imgLogo from "../images/old-logo.png";

function About() {
    return (
        <AnimationRevealPage>
            <Header />
            <MainFeature />
            <Footer />
        </AnimationRevealPage>
    );
}

export default About;
