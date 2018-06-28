import React, { Component } from "react";
import { AutoCompleteWidget } from "../custom-widgets";

class AssociationField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.formData,
      ...props.rootSchema,
      value: "",
    };

    // this.onSelect = this.onSelect.bind(this);
  }

  onSelect = type => value => {
    this.setState({ value }, () => {
      type === "array"
        ? this.props.onChange([value])
        : this.props.onChange(value);
    });
  };

  render() {
    const {
      schema: { description, title, type, "x-association": association },
      uiSchema,
    } = this.props;
    // console.log('props are: ', this.props);
    // console.log('assoc field schema', schema);
    // console.log('assoc field uiSchema', uiSchema);

    const { name: entityName } = association.child;

    return (
      <div className="form-group field field-string">
        <fieldset>
          <label className="control-label">{title}</label>
          <p>{description}</p>
          <AutoCompleteWidget
            url={`http://concepta-inspire-api-dev.herokuapp.com/v1/ermRecordDocument?where={"$and": [{"data": {"entity": "${entityName}"}}]}&whereSyntax=sequelize`}
            idField="id"
            labelField={uiSchema["ui:label"]}
            onSelect={this.onSelect(type)}
          />
        </fieldset>
      </div>
    );
  }
}

export default AssociationField;
