import AnimationRevealPage from 'helpers/AnimationRevealPage';
import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import tw from "twin.macro";

import Feature from "components/features/TwoColSingleFeatureWithStats2.js";
import Header from 'components/headers/light.js'
import Footer from "components/footers/Home-Footer";

function Events() {
    const location = useLocation()
    const card = location.state
    console.log(location, card)

    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    return (
        <AnimationRevealPage>
            <Header />
            <h1>{card ? card.title : "No details"}</h1>
            <Feature />
            <Footer />
        </AnimationRevealPage>
    );
}

export default Events;