import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios'
import { useTranslation } from 'react-i18next'

import LangMenu from './components/LangMenu'
import LangMenuJS from './components/LangMenu'

import Button from "@material-ui/core/Button";

import Darkmode from 'darkmode-js'
new Darkmode().showWidget()

function App () {
  const { t, i18n } = useTranslation()
  const handleClick = (lang) => i18n.changeLanguage(lang)

  useEffect(() => navigator.geolocation.getCurrentPosition((pos) => console.log(pos.coords.latitude, + ' ' + pos.coords.longitude)))

  useEffect(() => {
    const fetchData = async () => {
      const iso = await axios('http://ipinfo.io/json')
      if (iso.data.country === 'AU') i18n.changeLanguage('en')
      if (iso.data.country === 'IN') i18n.changeLanguage('hi')
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <nav style={{ width: '100%', padding: '2rem 0', backgroundColor: '#1b70d1' }}>
        <button onClick={() => handleClick('en')}>English</button>{' '}
        <button onClick={() => handleClick('hi')}>Hindi</button>
      </nav>
      <section style={{ padding: '1rem 0' }}>
        <LangMenu t={t} i18n={i18n} />
        {/* <LangMenuJS t={t} i18n={i18n} /> */}
      </section>
      <header className="App-header">
        <p>{t('hw.1')}</p>
      </header>
      <hr />
      <main>
        <Button variant="contained" color="primary">{t('C.1')}</Button>
      </main>
    </div>
  );
}

export default App;
