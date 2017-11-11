import React, { Component } from 'react'

import { TextInput, SelectBox, resetUID } from '../inputs.js'

class ModelField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      type: '',
      allowNull: null,
      defaultValue: null,
      validations: null
    }
  }

  nameChange = value => {
    this.setState(state => ({ ...state, name: value }))
  }
  typeChange = value => {
    this.setState(state => ({ ...state, type: value }))
  }
  allowNullChange = value => {
    this.setState(state => ({ ...state, allowNull: value }))
  }
  defaultValueChange = value => {
    this.setState(state => ({ ...state, defaultValue: value }))
  }
  validationsChange = value => {
    this.setState(state => ({ ...state, validations: value }))
  }

  render() {
    return (
      <div className="box" style={{ boxShadow: '0 0 0' }}>
        <div className="padded">
          <TextInput
            label="Field Name"
            placeholder="Field name?"
            value={this.state.name}
            onChange={this.nameChange}
          />
          <SelectBox
            label="Type"
            value={this.state.type}
            onChange={this.typeChange}
            options={[
              { value: 'STRING', label: 'STRING' },
              { value: 'CHAR', label: 'CHAR' },
              { value: 'TEXT', label: 'TEXT' },
              { value: 'INTEGER', label: 'INTEGER' },
              { value: 'FLOAT', label: 'FLOAT' },
              { value: 'DOUBLE', label: 'DOUBLE' },
              { value: 'DECIMAL', label: 'DECIMAL' },
              { value: 'REAL', label: 'REAL' },
              { value: 'ENUM', label: 'BOOLEAN' },
              { value: 'DATE', label: 'DATE' },
              { value: 'JSON', label: 'JSON' },
              { value: 'ARRAY', label: 'ARRAY' },
              { value: 'BOOLEAN', label: 'BOOLEAN' },
              { value: 'VIRTUAL', label: 'VIRTUAL' }
            ]}
          />
          {this.state.allowNull !== null && (
            <SelectBox
              label="allowNull"
              value={this.state.allowNull}
              onChange={this.allowNullChange}
              options={[
                { value: true, label: 'true' },
                { value: false, label: 'false' },
                { value: null, label: 'null' }
              ]}
            />
          )}
          {this.state.defaultValue !== null && (
            <TextInput
              label="Default Value"
              placeholder="values on values"
              value={this.state.defaultValue}
              onChange={this.defaultValueChange}
            />
          )}
          {this.state.validations !== null && (
            <TextInput
              label="Validations"
              placeholder="ex. { isEmail: true, len: [5, 30] }"
              value={this.state.validations}
              onChange={this.validationsChange}
            />
          )}
          <div className="bottom-toolbar">
            {this.state.allowNull === null && [
              <button
                className="btn btn-default"
                onClick={() => this.allowNullChange(false)}
              >
                Allow Null
              </button>,
              <span> </span>
            ]}
            <button
              className="btn btn-default"
              onClick={() => this.defaultValueChange('')}
            >
              Default Value
            </button>{' '}
            <button
              className="btn btn-default"
              onClick={() => this.validationsChange('')}
            >
              Validations
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ModelField
