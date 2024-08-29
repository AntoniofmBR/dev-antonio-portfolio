import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

import { Header } from '../../components/header'

export function Homepage() {
  const avatar = {
    default: { scale: 1 },
    hover: { scale: 1.1 },
  }

  const homepage_animation = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  }

  const {} = useTranslation();

    return (
    <motion.div
      variants={homepage_animation}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, delay: .75 }}
      className='animation h-screen flex flex-col gap-32 pr-7 pl-7'
    >
      <Header />
      <div className='flex items-center justify-between' >
        <div className='flex flex-col gap-3' >
          <h1 className='font-bold text-6xl' >
            <Trans i18nKey='title_Iam' />
            <strong className='text-green_base ml-3'>Antonio Fonseca</strong>
            <Trans i18nKey='title_developer' />
          </h1>
          <p className='font-extralight text-2xl' >
            <Trans i18nKey='subtitle' />
          </p>
        </div>
        <motion.img
          src='https://github.com/AntoniofmBR.png'
          alt="Avatar github Antonio"
          className='h-60 mr-20 rounded-3xl border-2 border-focus'
          variants={avatar}
          initial="default"
          whileHover="hover"
        />
      </div>
    </motion.div>
  )
}