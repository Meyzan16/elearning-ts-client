'use client';
import React, {FC,useEffect,useState} from 'react';
import Heading from './utils/Heading';
import Header from './components/homepage/Header';
import Hero from './components/homepage/Hero';
import Corporate from './components/homepage/Corporate';
import KategoriKelas from './components/homepage/KategoriKelas';
import Benefit from './components/homepage/Benefit';
import Kelas from './components/homepage/Kelas';
import CatalogRilis from './components/homepage/CatalogRilis';
import BannerPromo from './components/homepage/BannerPromo';

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div>
      <Heading 
        title="E-Learning"
        description='ELearning is a platform for students to learn and get help from teachers'
        keywords='Programming, Mern , Redux , Machine Learning'
      />
      <BannerPromo />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
      <Hero />
      <Corporate />
      <KategoriKelas />
      <Benefit/>
      <Kelas />
      <CatalogRilis />
     
    </div>
  )
}

export default Page;