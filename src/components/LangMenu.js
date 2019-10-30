import React, { useState } from 'react'

import { withTranslation } from 'react-i18next'

import { FormControl, Select, InputLabel } from "@material-ui/core";


const LangMenu = ({ t, i18n }) => {


  const [language, setLanguage] = useState();
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value)
  }

  return (
    <FormControl>
      <InputLabel htmlFor="age-native-simple">Language</InputLabel>
      <Select
        native
        value={language}
        onChange={handleChange}
      >
        <option value={'en'}>English</option>
        <option value={'hi'}>Hindi</option>
      </Select>
    </FormControl>
  )
}

export default withTranslation()(LangMenu)
