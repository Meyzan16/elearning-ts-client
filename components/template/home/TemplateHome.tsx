"use client"
import Heading from '@/components/UI/Heading/Heading';
import Hero from '@/components/pages/home/Hero';
import QAS from '@/components/pages/home/QAS';
import MenuKelas from '@/components/pages/home/KategoriKelas';
import React, { useContext, useEffect, useState } from 'react'
import Corporate from '@/components/pages/home/Corporate';
import Benefit from '@/components/pages/home/Benefit';
import CatalogRilisAfterLogin from '@/components/pages/home/CatalogRilisAfterLogin';
import Kelas from '@/components/pages/home/Kelas';
import CatalogRilis from '@/components/pages/home/CatalogRilis';
import { useSelector } from 'react-redux';
import { GlobalContext } from '@/context';
import AlertComponents from '@/components/UI/Alert/AlertComponents';

const Home = () => {
    const { openAlert } = useContext(GlobalContext)!
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // const token = useSelector((state: any) => state.auth);
    const { user } = useSelector((state: any) => state.auth);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return (
        <>
            <Heading
                title="E-Learning"
                description="ELearning is a platform for students to learn and get help from teachers"
                keywords="Programming, Mern , Redux , Machine Learning"
            />
            {/* <BannerPromo /> */}
            {isMobile ? (
                <>
                    <Hero />
                    <MenuKelas />
                    <QAS />
                </>
            ) : (
                <>
                    {
                        !user ? (
                            <>
                                <Hero />
                                <Corporate />
                                <MenuKelas />
                                <Benefit />
                                <Kelas />
                                <CatalogRilis />
                            </>
                        ):(
                            <>
                                <CatalogRilisAfterLogin /> 
                                <Kelas />
                            </>
                        )
                    } 
                </>
            )}
            {/* <Reviews /> */}


            {openAlert.status == true && (
                <AlertComponents />
            )}
        </>
    )
}

export default Home;