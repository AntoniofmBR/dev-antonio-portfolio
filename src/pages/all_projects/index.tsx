import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Header } from '../../components/header';
import { Card } from '../../components/card';

import AlertIcon from '../../assets/alert_icon.png'

import NotablesNotes from '../../assets/projects_images/notables_notes.png'
import CoffeeDelivery from '../../assets/projects_images/coffee_delivery.png'
import GithubBlog from '../../assets/projects_images/github_blog.png'
import GreenFlow from '../../assets/projects_images/greenflow.png'
import TodoList from '../../assets/projects_images/todo_list.png'
import NLWSetup from '../../assets/projects_images/nlw_setup.png'
import NLWSpaceTime from '../../assets/projects_images/nlw_spacetime.png'
import NLWeSports from '../../assets/projects_images/nlw_eSports.png'
import WorldGames from '../../assets/projects_images/world_games.png'

type Project = {
  title: string
  src: string
  url_github: string
  url_project?: string
  description: ReactElement<any, any>
}

export const projects: Project[] = [
  {
    title: 'Notables Notes',
    src: NotablesNotes,
    url_github: 'https://github.com/AntoniofmBR/Notables-Notes',
    description: <Trans i18nKey='description_notables_notes' />,
  },
  {
    title: 'Coffee Delivery',
    src: CoffeeDelivery,
    url_github: 'https://github.com/AntoniofmBR/E-commerce-Coffee-Delivery',
    url_project: 'https://coffeedelivery-project.vercel.app/',
    description: <Trans i18nKey='description_coffee_delivery' />,
  },
  {
    title: 'Github Blog',
    src: GithubBlog,
    url_github: 'https://github.com/AntoniofmBR/github_blog',
    url_project: 'https://antoniofm-github-blog.vercel.app/',
    description: <Trans i18nKey='description_github_blog' />,
  },
  {
    title: 'GreenFlow',
    src: GreenFlow,
    url_github: 'https://github.com/AntoniofmBR/GreenFlow',
    url_project: 'https://green-flow-lake.vercel.app/',
    description: <Trans i18nKey='description_greenflow' />,
  },
  {
    title: 'Todo List',
    src: TodoList,
    url_github: 'https://github.com/AntoniofmBR/todo-list',
    description: <Trans i18nKey='description_todolist' />,
  },
  {
    title: 'NLW Setup',
    src: NLWSetup,
    url_github: 'https://github.com/AntoniofmBR/nlw-setup',
    url_project: 'https://antoniofmbr.github.io/nlw-setup/',
    description: <Trans i18nKey='description_nlw_setup' />,
  },
  {
    title: 'NLW Spacetime',
    src: NLWSpaceTime,
    url_github: 'https://github.com/AntoniofmBR/Nlw-spacetime-Antonio',
    url_project: 'https://antoniofmbr.github.io/Nlw-spacetime-Antonio/',
    description: <Trans i18nKey='description_nlw_spacetime' />,
  },
  {
    title: 'NLW eSports',
    src: NLWeSports,
    url_github: 'https://github.com/AntoniofmBR/NLW-eSports',
    url_project: 'https://antoniofmbr.github.io/NLW-eSports/',
    description: <Trans i18nKey='description_nlw_eSports' />,
  },
  {
    title: 'Mundo dos Games',
    src: WorldGames,
    url_github: 'https://github.com/AntoniofmBR/mundo_dos_games',
    url_project: 'https://mundo-dos-games.vercel.app/',
    description: <Trans i18nKey='description_world_games' />,
  },
];


export default  function AllProjects() {
  const {  } = useTranslation();

  return (
    <div className='min-h-screen flex flex-col p-7 mb-11 items-center' >
      <Header />

      <h1 className= 'text-text_base font-bold text-4xl sm:mt-20 text-center' >
        <Trans i18nKey='title_projects' />
      </h1>
      <div className='flex items-center justify-center mt-2'>
        <motion.img
          className='h-10 w-10'
          src={AlertIcon}
          alt="Alert icon"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.p
          className='text-red-600 font-semibold'
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Trans i18nKey='all_projects_alert' />
        </motion.p>
      </div>

      <nav className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-12 justify-items-center' >
        { projects.map((project, index) => {
          return (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              src={project.src} 
              url_github={project.url_github}
              url_project={project.url_project ? project.url_project : ''}
              />
          )
        })}
      </nav>
    </div>
  )
}