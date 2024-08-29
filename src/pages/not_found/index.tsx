import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

import ErrorIllustration from '../../assets/error_illustration.png'
import Logo from '../../assets/logo.png'

export function NotFoundPage() {
  return (
    <div className='h-screen flex flex-col p-7' >
      <img
        src={Logo}
        alt="Logo"
        className='h-auto w-32'
      />

    <div className='flex items-center justify-between bg-background_principal text-center p-4'>
      <div className='flex flex-col gap-2' >
        <h1 className="text-6xl font-bold text-green_base">
          <Trans i18nKey='title_not_found' />
        </h1>
        <h2 className="text-xl mt-4 text-center">
          <Trans i18nKey='subtitle_not_found' />
        </h2>
        
        <p className="text-xl text-start mt-40" >
          <Trans i18nKey='question_not_found' />
        </p>

        <Link to="/" className="mt-6 p-2 w-1/2 bg-green_base text-white rounded transition-all duration-300 hover:bg-green-600 hover:scale-110">
          <Trans i18nKey='button_not_found' />
        </Link>
      </div>

      <img
        src={ErrorIllustration}
        alt="Error image"
        className='h-auto w-auto'
      />
    </div>

    </div>
  );
}
