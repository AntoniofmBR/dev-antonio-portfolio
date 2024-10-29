import { motion } from 'framer-motion'
import { GithubLogo, Link, X } from 'phosphor-react';
import { ReactElement, useState } from 'react';
import Modal from 'react-modal'
import { Trans } from 'react-i18next';

import Button from '../button';

type CardProps = {
  title: string
  src: string
  description: ReactElement<any, any>
  url_github: string
  url_project?: string
  children?: React.ReactNode;
}

Modal.setAppElement('#root');


export function Card({ title, src, description, url_github, url_project }: CardProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleChangeModalIsOpen() {
    setModalIsOpen(!modalIsOpen);
  };

  function redirectToGithub(url_github: string) {
    window.open(url_github, '_blank');
  }

  function redirectToProject(url_project: string) {
    if (url_project === '') {
      return 
    }

    window.open(url_project, '_blank');
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.10 }}
      whileFocus={{ border: 1 }}
      onClick={handleChangeModalIsOpen}
      className='flex flex-col items-center bg-bg_card rounded-2xl justify-between h-90 w-70 p-5 gap-2'
    >
      <h3 className='text-slate font-semibold text-lg' >
        {title}
      </h3>

      <img
        className='h-32 w-56'
        src={src}
        alt="Project Image"
      />

      <div className='flex gap-2 w-full mt-3' >
        <Button 
          className='bg-link_button_github h-7 w-1/2 justify-center rounded-md transition-all hover:bg-link_button_github_hover'
          onClick={() => redirectToGithub(url_github)}
        >
          <div className='flex'>
            <h3 className='text-text_base text-sm' >
              Github
            </h3>
            <GithubLogo size={22} />
          </div>
        </Button>

        <Button
          className='bg-link_button_project h-7 w-1/2 justify-center rounded-md transition-all hover:bg-link_button_project_hover'
          onClick={() => redirectToProject(url_project ? url_project : '/*' )}
          >
          <div className='flex' >
            <h3 className=' text-text_base text-sm w-20' >
              <Trans i18nKey='button_project_link' />
            </h3>
            <Link size={22} />
          </div>
        </Button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleChangeModalIsOpen}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0"
      >
        <div className='h-auto lg:w-[800px] md:w-[700px] sm:w-full flex flex-col items-center bg-bg_card p-7 rounded-2xl gap-2'>
        
          <div className='flex-1 flex justify-between w-full'>
              <div />

              <h2 className='font-bold text-text_base text-2xl mr-4'>
                {title}
              </h2>

              <button
                className='flex justify-center -mt-4 -mr-4'
                onClick={() => handleChangeModalIsOpen()}
              >
                <X />
              </button>
          </div>
        
         <div className='flex flex-col items-center justify-center gap-3' >
          <img
              src={src}
              className='lg:h-96 md:h-90 sm:h-64 w-full'
            />
            <p className='text-text_base w-full lg:text-md md:text-xl sm:text-sm' >
              {description}
            </p>
          </div>

          <div className='flex gap-2 w-5/6 mt-3' >
            <Button 
              className='bg-link_button_github h-12 w-1/2 justify-center rounded-md transition-all hover:bg-link_button_github_hover'
              onClick={() => redirectToGithub(url_github)}
            >
              <div className='flex gap-2 align-center justify-center' >
                <h3 className='text-text_base text-xl' >
                  Github
                </h3>
                <GithubLogo size={30} />
              </div>
            </Button>

            <Button
              className='bg-link_button_project h-12 w-1/2 justify-center rounded-md transition-all hover:bg-link_button_project_hover'
              onClick={() => redirectToProject(url_project ? url_project : '/*' )}
              >
              <div className='flex gap-2 align-center justify-center' >
                <h3 className='text-text_base text-xl' >
                  <Trans i18nKey='button_project_link' />
                </h3>
                <Link size={30} />
              </div>
            </Button>
          </div>
        </div>
      </Modal>
    </motion.button>
  )
}
