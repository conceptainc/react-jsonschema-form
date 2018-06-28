import React, { Component } from "react";

class HiddenField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.formData,
      ...props.rootSchema,
      value: "",
    };
  }

  render() {
    const {
      idSchema: { $id: id },
      formData,
    } = this.props;
    console.log("hidden field id is", id);
    console.log("hidden field formData is", formData);
    return (
      <div className="form-group field field-object">
        <fieldset>
          <input type="hidden" id={id} value="teste" />
        </fieldset>
      </div>
    );
  }
}

export default HiddenField;
