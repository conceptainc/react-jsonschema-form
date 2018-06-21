module.exports = {
  schema: {
    $schema: "http://json-schema.org/draft-07/hyper-schema#",
    base: "http://jsonplaceholder.typicode.com/",
    type: "object",
    title: "An entitiy",
    properties: {
      owner: {
        type: "object",
        properties: {
          id: {
            type: "number",
            readOnly: true,
          },
          name: {
            type: "string",
          },
        },
        links: [
          {
            rel: "self",
            href: "http://jsonplaceholder.typicode.com/users/{id}",
          },
          {
            rel: "collection",
            href: "http://jsonplaceholder.typicode.com/users",
          },
        ],
      },
      entity: {
        type: "string",
      },
      recordStatusType: {
        type: "string",
      },
      fields: {
        type: "object",
        properties: {
          boolTest: {
            type: "array",
            items: {
              type: "object",
              properties: {
                val: {
                  type: "boolean",
                },
              },
            },
          },
          numberTest: {
            type: "number",
          },
          dateTest: {
            type: "string",
            format: "date",
          },
          textTest: {
            type: "object",
            properties: {
              val: {
                type: "string",
              },
            },
          },
          textTestMulti: {
            type: "array",
            items: {
              type: "object",
              properties: {
                val: {
                  type: "string",
                },
              },
            },
          },
          enumTest: {
            type: "object",
            properties: {
              name: {
                type: "string",
                anyOf: [
                  {
                    type: "string",
                    title: "one",
                    enum: ["one"],
                  },
                  {
                    type: "string",
                    title: "two",
                    enum: ["two"],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  uiSchema: {
    owner: {
      "ui:field": "autocomp",
    },
    entity: {
      "ui:widget": "hidden",
    },
    recordStatusType: {
      "ui:widget": "hidden",
    },
    fields: {
      textTestMulti: {
        "ui:options": {
          orderable: false,
        },
      },
    },
  },
  formData: {
    entity: "entity_name",
    recordStatusType: "active",
    fields: {
      boolTest: [{ val: true }],
      numberTest: 1123,
      dateTest: "2018-01-01",
      textTest: { val: "Testing 1234" },
      textTestMulti: [
        {
          val: "Testing Mult1",
        },
        {
          val: "Testing Mult2",
        },
      ],
      enumTest: {
        name: "one",
      },
    },
  },
};
