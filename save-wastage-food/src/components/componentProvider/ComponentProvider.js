import React from 'react';


import ContactUs from "../contactUs/ContactUs";
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Locations from "../locations/Locations";
import MainCarousels from '../mainCarousel/MainCarousels';
import Navbar from '../navbar/MainNavbar';
import OurHistory from '../ourHistory/OurHistory';
import OurResources from "../ourResources/OurResources";
import OurServices from "../ourServices/OurServices";
import QuickDonate from '../quickDonate/QuickDonate';
import SpendMoney from '../spendMoney/SpendMoney';
import PatientDonnerStories from "../stories/PatientDonnerStories";
import Testimonial from "../testimonial/Testimonial";
import WhoWeAre from '../whoWeAre/WhoWeAre';

function ComponentProvider() {
    return (
        <div>
            <Header />
            <Navbar />
            <MainCarousels />
            <QuickDonate />
            <WhoWeAre />
            <OurHistory />
            <OurServices />
            <SpendMoney />
            <OurResources />
            <PatientDonnerStories />
            <Testimonial />
            <Locations />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default ComponentProvider
