import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Trans } from 'react-i18next';

import { Skill, SkillProps } from '../../components/skill';

import Illustration from '../../assets/illustration.png';
import React from '../../assets/skills/react.png';
import TypeScript from '../../assets/skills/typescript.png';
import Node from '../../assets/skills/node.png';
import Tailwindcss from '../../assets/skills/tailwindcss.png';
import HTML from '../../assets/skills/html.png';
import CSS from '../../assets/skills/css.png';
import JavaScript from '../../assets/skills/javascript.png';
import ReactNative from '../../assets/skills/react_native.png';

const skills: SkillProps[] = [
  {
    src: React,
    alt: 'React',
  },
  {
    src: TypeScript,
    alt: 'TypeScript',
  },
  {
    src: Node,
    alt: 'Node',
  },
  {
    src: Tailwindcss,
    alt: 'Tailwindcss',
  },
  {
    src: HTML,
    alt: 'HTML',
  },
  {
    src: CSS,
    alt: 'CSS',
  },
  {
    src: JavaScript,
    alt: 'JavaScript',
  },
  {
    src: ReactNative,
    alt: 'ReactNative',
  },
]


export function About() {
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

  const illustration_animation = {
    default: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const about_page_animation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={about_page_animation}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: .5, delay: 0.25 }}
      className='animation h-screen flex flex-col bg-background_secondary pr-7 pl-7'
    >
      <h1 className='text-text_base font-bold text-4xl mt-10'>
        <Trans i18nKey='title_about' />
      </h1>
      <main className='flex justify-between mt-7 w-full'>
        <section className='w-1/2' >
          <p className='font-extralight text-xl text-text_base'>
            <Trans i18nKey='paragraph' />
            <br />
            <br />
            <Trans i18nKey='subtitle_about' />
          </p>


          <h1 className='text-text_base font-bold text-4xl mt-16'>
            <Trans i18nKey='mySkills_about' />
          </h1>
          <div className='grid grid-cols-4 gap-6 mt-6 justify-center' >
            { skills.map((skill, index) => {
              return (
                <Skill
                  key={index}
                  src={skill.src}
                  alt={skill.alt}
                />
              )
            }) }
          </div>
        </section>

        <section className='flex flex-col items-center w-1/2'>
          <motion.img
            src={Illustration}
            alt="Illustration"
            className='h-96'
            variants={illustration_animation}
            initial="default"
            whileHover="hover"
          />
          <div className='flex flex-col items-center justify-center' >
            <p className='font-extralight text-2xl text-text_base'>
              <Trans i18nKey='phrase_jobs' />
            </p>
            <p className='font-extralight text-2xl text-text_base flex justify-start mt-2 w-full'>
              -Steve Jobs
            </p>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
