import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CaretDoubleLeft, CaretDoubleRight } from 'phosphor-react';

import Button from '../../components/button';
import NotablesNotes from '../../assets/projects_images/notables_notes.png'
import CoffeeDelivery from '../../assets/projects_images/coffee_delivery.png'
import GithubBlog from '../../assets/projects_images/github_blog.png'

const images = [
  {
    title: 'Notables Notes',
    src: NotablesNotes,
  },
  {
    title: 'Coffee Delivery',
    src: CoffeeDelivery,
  },
  {
    title: 'Github Blog',
    src: GithubBlog,
  }
];

export function SomeProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleGoToAllProjectsPage = () => {
    navigate('/projects');
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const someProjects_page_animation = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      ref={ref}
      variants={someProjects_page_animation}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: .5, delay: 0.25 }}
      className='h-screen animation flex flex-col pr-7 pl-7 pb-7 justify-between'
    >
      <h1 className='text-text_base font-bold text-4xl mt-16' >
        <Trans i18nKey='some_projects_title' />
      </h1>

      <div className="flex items-center justify-between h-screen">
        <Button onClick={handlePrev} className="mr-5">
          <CaretDoubleLeft size={40} className='hover:text-gray_dark' />
        </Button>
        <div className='flex flex-col w-full items-center gap-12' >
          <h1 className='text-text_base text-2xl font-light' >
            {images[currentIndex].title}
          </h1>
          <motion.img
            src={images[currentIndex].src}
            alt={`Image ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="w-3/5 h-90 object-cover"
          />
        </div>
        <Button onClick={handleNext} className="ml-5">
          <CaretDoubleRight size={40} className='hover:text-gray_dark' />
        </Button>
    </div>

      <div className='flex w-full justify-center' >
        <Button
          className='bg-gray_light mt-5 w-72 transition-all duration-300 hover:bg-gray_dark hover:scale-110'
          onClick={handleGoToAllProjectsPage}
        >
          <h3 className='font-semibold text-text_base text-lg justify-center w-full'>
            <Trans i18nKey="some_projects_button" />
          </h3>
        </Button>
      </div>
    </motion.div>
  )
}