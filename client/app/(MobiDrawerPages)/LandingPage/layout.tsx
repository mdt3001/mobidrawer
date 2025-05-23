'use client';
import React from 'react';
import LandingNavbar from '@/app/(MobiDrawerPages)/Shared/Components/Header';
import HeroSection from '@/app/(MobiDrawerPages)/LandingPage/Components/HeroSection';
import Banner from '@/app/(MobiDrawerPages)/LandingPage/Components/Banner';
import LogoSlider from '@/app/(MobiDrawerPages)/LandingPage/Components/LogoSlider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Features from '@/app/(MobiDrawerPages)/LandingPage/Components/FeatureSection';
import UseCasesSection from '@/app/(MobiDrawerPages)/LandingPage/Components/UseCasesSection';
import InnovativeCompaniesSection from '@/app/(MobiDrawerPages)/LandingPage/Components/CompaniesSection';
import CustomizablePlatform from '@/app/(MobiDrawerPages)/LandingPage/Components/CustomizablePlatform';
import TestimonialSection from '@/app/(MobiDrawerPages)/LandingPage/Components/TestimonialSection';
import Footer from '@/app/(MobiDrawerPages)/Shared/Components/Footer';
export default function Layout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <div>
            <Banner />
            <LandingNavbar />
            <div className="max-w-[calc(100%-250px)] mx-auto">
                <div className='relative z-20'>
                    <HeroSection />
                    <LogoSlider />
                    <UseCasesSection />
                    <Features />
                    <InnovativeCompaniesSection />
                    <CustomizablePlatform />
                    <TestimonialSection />
                </div>
            </div>
            <Footer />
        </div>
    )
}