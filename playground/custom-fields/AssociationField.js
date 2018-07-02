import React, { Component } from "react";
import { SelectAsyncWidget } from "../custom-widgets";

const queryData = (entityId, entityName, labelField) => searchTerm => ({
  syntax: "inspire",
  criteria: {
    id: "g-f0314635-50a3-45f9-8bbe-252233128aa7",
    ruleType: "group",
    rules: [
      {
        id: "r-281dad1c-3c32-4532-9e90-177e4ce5f1db",
        ruleType: "entityRule",
        operator: "startsWith",
        entityField: labelField,
        entitySubfield: "val",
        value: searchTerm,
      },
    ],
    combinator: "AND",
    parameters: {
      entity: entityName,
      entityId: entityId,
      sort: "Ascending",
      limit: 10,
      advanced: false,
    },
  },
});

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

    const { name: entityName, id: entityId } = association.child;
    const { "ui:value": idField, "ui:label": labelField } = uiSchema;

    // hack to get the entityField to be queried against
    const regex = /\.([\w\d]*)\[0\]/;
    const match = regex.exec(labelField);
    const queryField = match[1];

    return (
      <div className="form-group field field-string">
        <fieldset>
          <label className="control-label">{title}</label>
          <p>{description}</p>
          <SelectAsyncWidget
            url="http://concepta-inspire-api-dev.herokuapp.com/v1/ermRecordDocument/search"
            method="post"
            data={queryData(entityId, entityName, queryField)}
            idField={idField}
            labelField={labelField}
            onChange={this.onSelect(type)}
          />
        </fieldset>
      </div>
    );
  }
}

export default AssociationField;
