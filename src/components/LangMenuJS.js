import React, { Component } from 'react'

import { withTranslation } from 'react-i18next'

import { FormControl, Select, InputLabel } from "@material-ui/core";


class LangMenuJS extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.props.i18n.changeLanguage(e.target.value);
    this.setState({ languages: e.target.value })
  }

  render () {
    return (
      <FormControl>
        <InputLabel htmlFor="age-native-simple">Language</InputLabel>
        <Select
          native
          value={this.state.language}
          onChange={this.handleChange}
        >
          <option value={'en'}>English</option>
          <option value={'hi'}>Hindi</option>
        </Select>
      </FormControl>
    )
  }
}

export default withTranslation()(LangMenuJS)