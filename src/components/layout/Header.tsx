import { FC } from 'react'

interface HeaderProps {
  language: 'en' | 'fr'
}

const Header: FC<HeaderProps> = ({ language }) => {
  const content = {
    en: {
      name: 'Abdoul Hamid COULIBALY',
      title: 'Software Engineer'
    },
    fr: {
      name: 'Abdoul Hamid COULIBALY',
      title: 'Ingénieur Logiciel'
    }
  }

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">{content[language].name}</h1>
        <p className="text-xl">{content[language].title}</p>
      </div>
    </header>
  )
}

export default Header

