import AnimationRevealPage from 'helpers/AnimationRevealPage';
import React, { Component } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import tw from "twin.macro";

import Feature from "components/features/TwoColSingleFeatureWithStats2.js";
import Header from 'components/headers/light.js'
import Footer from "components/footers/Home-Footer";

function Events() {
    const location = useLocation()
    const card = location.state
    const history = useHistory()

    console.log(location, card)

    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    return (
        <AnimationRevealPage>
            <Header />
            {/* <h1>{card ? card.title : history.push("/events")}</h1> */}
            <Feature 
                subheading={card.timing}
                heading={card.title}
                description={card.description ? card.description : null}
                imageSrc={card.imageSrc}
                primaryButtonText="Register Now!"
            />
            <Footer />
        </AnimationRevealPage>
    );
}

export default Events;