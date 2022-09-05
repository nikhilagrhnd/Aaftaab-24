import AnimationRevealPage from 'helpers/AnimationRevealPage';
import React  from 'react';
import Features from "components/features/SponsersCard";
import Header from "components/headers/light"
function Sponsors() {
    return (
        <AnimationRevealPage>
            <Header />
            <Features />
        </AnimationRevealPage>
    );
}

export default Sponsors;