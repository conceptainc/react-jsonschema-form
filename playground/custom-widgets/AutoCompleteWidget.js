import React, { Component } from "react";
import Autocomplete from "react-autocomplete";
import axios from "axios";

export default class AutoCompleteWidget extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: "",
      autocompleteData: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.getItemValue = this.getItemValue.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(
      this
    );
  }

  retrieveDataAsynchronously(searchText) {
    const url = this.props.url;
    const _this = this;

    axios
      .get(url)
      .then(response => {
        console.log("response ", response);
        const retrievedData = response.data.map(item => ({
          value: item.id,
          label: item.name,
        }));
        console.log("parsed data", retrievedData);
        _this.setState({
          autocompleteData: retrievedData,
        });
      })
      .catch(e => console.log("error: ", e));
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });

    this.retrieveDataAsynchronously(e.target.value);
    console.log("changed to ", e.target.value);
  }

  onSelect(val) {
    this.setState({
      value: val,
    });

    console.log("selected", val);
  }

  renderItem(item, isHighlighted) {
    return (
      <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
        {item.label}
      </div>
    );
  }

  getItemValue(item) {
    return `${item.value} - ${item.label}`;
  }

  render() {
    return (
      <div>
        <Autocomplete
          getItemValue={this.getItemValue}
          items={this.state.autocompleteData}
          renderItem={this.renderItem}
          value={this.state.value}
          onChange={this.onChange}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
