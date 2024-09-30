import './App.css'
import {Trans, useTranslation } from 'react-i18next'
import LanguageSelector from './components/LanguageSelector'

function App() {
  const {t} = useTranslation();  
  const {line1, line2} = t("description");

  return (
    <div className='container'>
      <LanguageSelector />
        <h1>{t("getting")}</h1>
        <h2>Description : {line1}</h2>
        <h2>Description chanel : 
            <Trans
              i18nKey={line2}      
              values={{
                chanel : "Binh"
              }}      
              components={{1 : <a />}}
            />
        </h2>

    </div>
  )
}

export default App
