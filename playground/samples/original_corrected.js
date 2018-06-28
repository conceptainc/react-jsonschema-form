module.exports = {
  schema: {
    $id:
      "https://concepta-inspire-api-dev.herokuapp.com/v1/ermEntitySchema/672eddfb-3b5e-4ff0-8cbc-d6a3f9e1e517",
    $schema: "http://json-schema.org/draft-06/schema#",
    type: "object",
    description: "A Business",
    required: ["entity"],
    properties: {
      entity: {
        type: "string",
        const: "account",
      },
      recordStatusType: {
        $ref: "#/definitions/types/recordStatus",
      },
      fields: {
        type: "object",
        required: [],
        properties: {
          emailPrimary: {
            type: "object",
            required: [],
            properties: {
              address: {
                type: "string",
                format: "email",
                title: "Address",
              },
              priority: {
                title: "Priority",
                type: "number",
              },
              emailType: {
                $ref: "#/definitions/types/email",
              },
            },
            title: "Primary E-mail",
            description: "Primary e-mail address.",
            "x-field": {
              id: "519c4f0d-3c77-4d5e-8412-001755c62cc9",
              required: false,
              multiple: false,
            },
          },
          phoneMobile: {
            type: "object",
            required: [],
            properties: {
              number: {
                type: "string",
                title: "Number",
                maxLength: 15,
                minLength: 7,
              },
              priority: {
                type: "number",
                title: "Priority",
              },
              phoneType: {
                $ref: "#/definitions/types/phone",
              },
            },
            title: "Mobile Phone",
            description: "Mobile phone number.",
            "x-field": {
              id: "651b1691-b100-4f86-93a2-5fd755ba5a58",
              required: false,
              multiple: false,
            },
          },
          phoneAlt: {
            type: "object",
            required: [],
            properties: {
              number: {
                type: "string",
                title: "Number",
                minLength: 3,
              },
              priority: {
                type: "number",
                title: "Priority",
              },
              phoneType: {
                $ref: "#/definitions/types/phone",
              },
            },
            title: "Alternate Phone",
            description: "Alternate phone number.",
            "x-field": {
              id: "f84619e8-0bfa-45c1-86ba-188ecc852c98",
              required: false,
              multiple: false,
            },
          },
          phoneWork: {
            type: "object",
            required: [],
            properties: {
              number: {
                type: "string",
                title: "Number",
              },
              priority: {
                type: "number",
                title: "Priority",
              },
              phoneType: {
                $ref: "#/definitions/types/phone",
              },
            },
            title: "Work Phone",
            description: "Work/office phone number.",
            "x-field": {
              id: "3d3849d3-681e-4333-ab06-47c52cd50d6b",
              required: false,
              multiple: false,
            },
          },
          name: {
            type: "object",
            properties: {
              val: {
                type: "string",
                title: "Value",
              },
            },
            title: "Name",
            description: "The name of the business.",
            "x-field": {
              id: "eb2d89d8-e2a8-44e6-906f-64932f7f1ac4",
              required: false,
              multiple: false,
            },
          },
          type: {
            type: "string",
            title: "Account Type",
            enum: [
              "60ada31e-42f3-40dd-8d89-5c74a9f1bfe0",
              "344ecca0-c3d0-4bd7-83b6-19aa0aee5573",
            ],
            enumNames: ["Active", "Lead"],
            description: "Account Type",
            "x-field": {
              id: "8f7e7a87-8a5d-460a-8b13-acf6b2713efb",
              required: false,
              multiple: false,
            },
          },
        },
      },
      associations: {
        type: "object",
        required: [],
        properties: {
          accountContacts: {
            type: "array",
            title: "Contacts",
            description: "Account Contacts",
            items: {
              type: "string",
            },
            "x-association": {
              id: "ee7ceaa9-12ce-46f4-af5b-ea04679fbbc1",
              name: "accountContacts",
              cardinalityMin: 0,
              cardinalityMax: 0,
              child: {
                id: "1b15e9e3-8dc1-478f-9f49-3f94e8ee5ceb",
                name: "person",
                description: "A Person",
              },
            },
          },
          accountNotes: {
            type: "string",
            title: "Notes",
            description: "Account has many account notes.",
            "x-association": {
              id: "ca637ed7-a017-4c9b-822e-a37080c71441",
              name: "accountNotes",
              cardinalityMin: 0,
              cardinalityMax: 0,
              child: {
                id: "f6e09bfb-9256-41c3-913e-305be53eddd2",
                name: "note",
                description: "A Note",
              },
            },
          },
          accountDeals: {
            type: "string",
            title: "Deals",
            description: "Account has many deals",
            "x-association": {
              id: "ef015a91-5f4d-4b88-9592-2cbf4b3057b1",
              name: "accountDeals",
              cardinalityMin: 0,
              cardinalityMax: 0,
              child: {
                id: "75dd057f-f7ce-467b-9bfe-ef85cadc6077",
                name: "deal",
                description: "Deal",
              },
            },
          },
          accountSalesPersons: {
            type: "string",
            title: "Sales Persons",
            description: "Account Sales Persons",
            "x-association": {
              id: "5ce14ab4-3897-4d17-a8b9-6660e2e9e8dd",
              name: "accountSalesPersons",
              cardinalityMin: 1,
              cardinalityMax: 0,
              child: {
                id: "1b15e9e3-8dc1-478f-9f49-3f94e8ee5ceb",
                name: "person",
                description: "A Person",
              },
            },
          },
        },
      },
      reverseAssociations: {
        type: "object",
        required: [],
        properties: {
          activityAccount: {
            type: "string",
            title: "Account",
            description: "Activity Account",
            "x-association": {
              id: "02dd42be-cfd1-4254-93db-dfc61a8143fb",
              name: "activityAccount",
              cardinalityMin: 0,
              cardinalityMax: 1,
              parent: {
                id: "18564699-520a-4c13-a3f0-ea84d90b3f5f",
                name: "activity",
                description: "Activity",
              },
            },
          },
          dealAccount: {
            type: "string",
            title: "Account",
            description: "Deal Account",
            "x-association": {
              id: "ae390d6f-f2a2-4dbd-a789-9722a6bbbcc5",
              name: "dealAccount",
              cardinalityMin: 1,
              cardinalityMax: 1,
              parent: {
                id: "75dd057f-f7ce-467b-9bfe-ef85cadc6077",
                name: "deal",
                description: "Deal",
              },
            },
          },
        },
      },
    },
    definitions: {
      types: {
        recordStatus: {
          type: "string",
          title: "Record Status",
          enum: [
            "53aadf54-1fad-48e5-98d1-fa6d7302344e",
            "d654e4ea-8112-4a8e-acb9-c5394eb4a7a2",
            "a45eca20-70b6-46b1-8d34-28a95268ebea",
            "7b7d52d3-f519-449a-89c3-a1aa93030a17",
          ],
          enumNames: [
            "An active record",
            "An inactive record",
            "A pending record",
            "An archived record",
          ],
        },
        email: {
          type: "string",
          title: "Email Type",
          enum: [
            "052a26ac-d0d5-4e9e-b155-d57f39dca5f5",
            "d089971e-f95c-4588-b3a2-1d3afd17870f",
            "3f35b053-eefe-4687-95b9-010c71e6ca16",
            "717f33aa-89b9-489f-abc1-01bee8388b58",
            "169d7a07-d45f-4f43-81ce-8938664d84f7",
          ],
          enumNames: [
            "Work correspondence",
            "Personal correspondence",
            "Sales inquiries",
            "Support inquiries",
            "Primary",
          ],
        },
        phone: {
          type: "string",
          title: "Phone Type",
          enum: [
            "3dcf1bfb-7585-4740-9ca2-eed83b5235f3",
            "9f8286a9-1052-4fd7-87c7-18ad5f29ffd2",
            "58ebbcd6-0d0b-4331-9594-f255ba6f5509",
            "16fd40be-c16e-46ca-bb01-29335d345519",
            "c87cb8cd-e435-4fb7-92ce-92a1582a1dc5",
            "ccd10585-8211-40b3-8f58-fff7253ea796",
          ],
          enumNames: [
            "Office number",
            "Sales number",
            "Support number",
            "Home number",
            "Alternate number",
            "Mobile number",
          ],
        },
        address: {
          type: "string",
          title: "Address Type",
          enum: [
            "cede715a-fd71-4643-aff0-d5a31a98fb34",
            "4506fc8c-9da6-4fae-a0dd-86a733854f06",
          ],
          enumNames: ["Office address", "Home Address"],
        },
      },
    },
  },
  uiSchema: {
    associations: {
      accountContacts: {
        "ui:field": "association",
        "ui:label": "fields.email[0].address",
      },
    },
    reverseassociations: {
      "ui:widget": "hidden",
    },
  },
  formData: {
    entity: "account",
    recordStatusType: "53aadf54-1fad-48e5-98d1-fa6d7302344e",
    fields: {
      emailPrimary: {
        address: "dontoaz@gmail.com",
        priority: 1,
        emailType: "052a26ac-d0d5-4e9e-b155-d57f39dca5f5",
      },
      phoneMobile: {
        number: "1234444",
        priority: 1,
        phoneType: "3dcf1bfb-7585-4740-9ca2-eed83b5235f3",
      },
      phoneAlt: {
        number: "123123123",
        priority: 1,
        phoneType: "9f8286a9-1052-4fd7-87c7-18ad5f29ffd2",
      },
      phoneWork: {
        number: "1312131333",
        priority: 1,
        phoneType: "58ebbcd6-0d0b-4331-9594-f255ba6f5509",
      },
      name: {
        val: "Test Name",
      },
      type: "344ecca0-c3d0-4bd7-83b6-19aa0aee5573",
    },
    associations: {},
    reverseassociations: {},
  },
};
