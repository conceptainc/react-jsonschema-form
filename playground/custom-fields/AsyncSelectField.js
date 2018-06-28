import React, { Component } from "react";
import axios from "axios";

class AsyncSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.formData,
      ...props.rootSchema,
      value: "",
      selectOptions: [],
    };
  }

  componentDidMount = () => {
    const _this = this;
    const { base } = this.props.schema;
    const { href } = this.props.schema.links[0];
    const {
      "ui:value": valueField,
      "ui:label": labelField,
    } = this.props.uiSchema;
    axios.get(base + href).then(response => {
      const selectOptions = response.data.map(entity => ({
        value: entity[valueField],
        label: entity[labelField],
      }));
      _this.setState({ selectOptions });
    });
  };

  onSelect = ({ target: { value } }) => {
    this.setState({ value }, () => this.props.onChange(value));
  };

  render() {
    const { name, schema } = this.props;
    return (
      <div className="form-group field field-string">
        <fieldset>
          <label className="control-label">{schema.title}</label>
          <select
            className="form-control"
            name={name}
            onChange={this.onSelect}
            value={this.state.value}>
            {this.state.selectOptions.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </fieldset>
      </div>
    );
  }
}

export default AsyncSelect;
