import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trans } from 'react-i18next';

import Button from '../../components/button';
import Logo from '../../assets/logo.png'

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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

  const contact_page_animation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  function handleClickContactButton() {
    window.location.href = 'mailto:antonio.fonse06@gmail.com?subject=Interessado em Contato&body=Olá, gostaria de entrar em contato.';
  }

  return (
    <motion.div 
      ref={ref}
      variants={contact_page_animation}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: .5, delay: 0.25 }}
      className='animation min-h-screen bg-background_secondary flex flex-col justify-between pr-7 pl-7'
    >
      <h1 className='text-text_base font-bold text-4xl mt-14 w-full' >
        <Trans i18nKey='contact_title' />
      </h1>


      <div className='flex flex-col mt-52 items-center' >
        <h2 className='text-text_base font-semibold text-4xl w-full text-center' >
          <Trans i18nKey='contact_phrase' />
        </h2>

        <Button
          className='bg-green_base mt-5 transition-all duration-300 hover:bg-green-600 hover:scale-110'
          onClick={handleClickContactButton}
          >
            <h3 className='font-semibold text-text_base' >
              <Trans i18nKey='contact_CTA' />
            </h3>
          </Button>
      </div>

      <div className='w-full h-full flex flex-col items-center justify-end mt-20 mb-2 gap-4' >
        <motion.img
          src={Logo}
          alt="Logo"
          className='h-22 w-22 flex items-center'
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
        />

        <h4 className='font-extralight text-sm' >
          © Code by Antoniofm
        </h4>
      </div>
    </motion.div>
  )
}