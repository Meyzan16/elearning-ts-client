'use client';
import React, {FC,useEffect,useState} from 'react';
import Heading from './utils/Heading';
import Header from './components/homepage/Header';
import Hero from './components/homepage/Hero';
import Corporate from './components/homepage/Corporate';
import MenuKelas from './components/homepage/MenuKelas';

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
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
      <Hero />
      <Corporate />
      <MenuKelas />
     
    </div>
  )
}

export default Page;