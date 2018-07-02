import React, { Component } from "react";
import Autocomplete from "react-autocomplete";
import axios from "axios";
import get from "lodash/get";

export default class AutoCompleteWidget extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: "",
      itemId: "",
      autocompleteData: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.getItemValue = this.getItemValue.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(
      this
    );
    this.shouldItemRender = this.shouldItemRender.bind(this);
  }

  retrieveDataAsynchronously(searchText) {
    const { url, idField, labelField } = this.props;
    const _this = this;

    axios
      .get(url)
      .then(response => {
        const retrievedData = response.data.map(item => ({
          value: get(item, idField),
          label: get(item, labelField) || "empty",
        }));
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
  }

  onSelect(value, { value: itemId }) {
    this.setState({
      value,
      itemId,
    });
    this.props.onSelect(itemId);
  }

  renderItem(item, isHighlighted) {
    return (
      <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
        {item.label}
      </div>
    );
  }

  shouldItemRender(item, value) {
    return item.label.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  }

  getItemValue(item) {
    return item.label;
  }

  render() {
    return (
      <div>
        <Autocomplete
          getItemValue={this.getItemValue}
          items={this.state.autocompleteData}
          renderItem={this.renderItem}
          shouldItemRender={this.shouldItemRender}
          value={this.state.value}
          onChange={this.onChange}
          onSelect={this.onSelect}
          wrapperStyle={{}}
          inputProps={{ className: "form-control" }}
        />
      </div>
    );
  }
}
