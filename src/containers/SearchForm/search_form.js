import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { fetchImages } from '../../actions/index';

import './search_form.css';


class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedColor: null
    }
  }

  onSubmit(values) {
    this.props.fetchImages(values);
  }

  selectColour(color) {
    this.setState({
      selectedColor: color
    })
  }

  render() {
    console.log(this);
    const {handleSubmit, pristine, reset, submitting} = this.props
    const colorRadioList = ["red", "yellow", "green", "purple"].map((color) => {
      const selected = this.state.selectedColor === color;
      return (
        <div
          onClick={() => {this.selectColour(color)}}
          key={color} className="colour-wrap">
          <label>
            <Field name="color" component="input" type="radio" value={color} />
            <div
              className={`${ selected ? `color-square ${color} focus` : `color-square ${color}`}`}>
            </div>
          </label>
        </div>
      )
    })

    return (
      <form
        className="form-search-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <header className="form-header">Select A Colour</header>
          <div>
            <div className="color-picker">
              {colorRadioList}
            </div>
          </div>
        </div>

        <div>
          <button className="submit" type="submit" disabled={pristine || submitting}>Search Pictures</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({form: 'colourfulPictures'})(connect(null, { fetchImages })(SearchForm));
