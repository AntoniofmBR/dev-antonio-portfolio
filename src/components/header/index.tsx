import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

import Logo from '../../assets/logo.png'
import i18n from '../../../ii8n'

export function Header() {
  const navigate = useNavigate();

  const handleBackToHomepage = () => {
    navigate('/');
  };

  const button_animation = {
    default: { scale: 1 },
    hover: { scale: 1.20 },
  }

  const { } = useTranslation();

  return (
    <header className='flex justify-between items-center mt-7 w-full' >
      <motion.img
       src={Logo}
       alt="Logo Antonio Developer"
       className='h-16'
       onClick={handleBackToHomepage}
       whileHover={{ scale: 1.1 }}
       />

      <section className='flex items-center gap-1' >
        <motion.button
          variants={button_animation}
          initial="default"
          whileHover="hover"
          onClick={() => i18n.changeLanguage('pt')}
        >
          PT
        </motion.button>
        |
        <motion.button
          variants={button_animation}
          initial="default"
          whileHover="hover"
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </motion.button>
      </section>
    </header>
  )
}