import React, { Component } from "react";
import { AutoCompleteWidget } from "../custom-widgets";

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.formData,
      ...props.rootSchema,
    };

    // this.onSelect = this.onSelect.bind(this);
  }

  onSelect = field => value => {
    this.setState({ [field]: value }, () => this.props.onChange(this.state));
  };

  render() {
    const { name, schema, uiSchema } = this.props;
    return (
      <div className="form-group field field-string">
        <fieldset>
          <label className="control-label">{name}</label>
          <AutoCompleteWidget
            url={schema.links.filter(link => link.rel === "collection")[0].href}
            idField="id"
            labelField={uiSchema["ui:label"]}
            onSelect={this.onSelect("id")}
          />
        </fieldset>
      </div>
    );
  }
}

export default AutoComplete;
