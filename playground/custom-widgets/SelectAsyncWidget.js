import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import axios from "axios";
import get from "lodash/get";

export default class SelectAsyncWidget extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      backspaceRemoves: true,
      multi: true,
      value: [],
    };

    this.onChange = this.onChange.bind(this);
    this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(
      this
    );
  }

  onChange(value) {
    this.setState({ value });
    const values = value.map(item => item.value);
    this.props.onChange(values);
  }

  retrieveDataAsynchronously(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }

    const { url, data = {}, method = "get", idField, labelField } = this.props;
    const payload = data(input);

    return axios({ method, url, data: payload }).then(response => {
      const retrievedData = response.data.map(item => ({
        value: get(item, idField),
        label: get(item, labelField) || "empty",
      }));
      return { options: retrievedData };
    });
  }

  render() {
    return (
      <div className="section">
        <Select.Async
          multi={this.state.multi}
          value={this.state.value}
          onChange={this.onChange}
          valueKey="value"
          labelKey="label"
          loadOptions={this.retrieveDataAsynchronously}
          backspaceRemoves={this.state.backspaceRemoves}
          ignoreCase={false}
        />
      </div>
    );
  }
}
