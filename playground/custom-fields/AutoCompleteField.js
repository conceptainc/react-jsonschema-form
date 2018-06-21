import React, { Component } from "react";
import { AutoCompleteWidget } from "../custom-widgets";

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.formData,
      ...props.rootSchema,
    };
  }

  onChange(name) {
    return event => {
      this.setState({ [name]: event.target.value });
      setImmediate(() => this.props.onChange(this.state));
    };
  }

  render() {
    console.log("state", this.state);
    console.log("props", this.props);
    // const {[this.props.name]: value} = this.state
    return (
      <div className="geo">
        <h3>Hey, Im a custom component</h3>
        <div className="row">
          <div className="col-sm-6">
            <label>Auto Complete Field</label>
            <AutoCompleteWidget url={this.props.schema.links[1].href} />
          </div>
        </div>
      </div>
    );
  }
}

export default AutoComplete;
