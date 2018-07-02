import Simple from "./simple";
import SimpleHyperSchema from "./simple_hyperschema";
import Original from "./original";
import OriginalCorrected from "./original_corrected";

const samples = {
  Simple,
  SimpleHyperSchema,
  Original,
  OriginalCorrected,
};

const uiSchemaSamples = {
  account: {
    "ui:order": [
      "associations",
      "fields",
      "entity",
      "recordStatusType",
      "reverseAssociations",
    ],
    entity: {
      "ui:widget": "hidden",
    },
    recordStatusType: {
      "ui:widget": "hidden",
    },
    associations: {
      "ui:order": [
        "accountSalesPersons",
        "accountDeals",
        "accountContacts",
        "accountNotes",
      ],
      accountContacts: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.firstName[0].val",
      },
      accountNotes: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.title[0].val",
      },
      accountDeals: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.name[0].val",
      },
      accountSalesPersons: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.firstName[0].val",
      },
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  activity: {
    "ui:order": [
      "associations",
      "fields",
      "entity",
      "recordStatusType",
      "reverseAssociations",
    ],
    entity: {
      "ui:widget": "hidden",
    },
    recordStatusType: {
      "ui:widget": "hidden",
    },
    associations: {
      activityIsTask: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.description[0].val",
      },
      activityRecipients: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.firstName[0].val",
      },
      activityAccount: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.name[0].val",
      },
      activityDeal: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.name[0].val",
      },
      activityIsEmail: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.title[0].val",
      },
      activityIsCall: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.comments[0].val",
      },
      activityAgent: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.firstName[0].val",
      },
      activityHiddenRecipients: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.firstName[0].val",
      },
      activityOwner: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.firstName[0].val",
      },
      activityIsEvent: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.description[0].val",
      },
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  activityTask: {
    entity: {
      "ui:widget": "hidden",
    },
    recordStatusType: {
      "ui:widget": "hidden",
    },
    associations: {
      "ui:field": "ignoreField",
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  activityEvent: {
    entity: {
      "ui:widget": "hidden",
    },
    recordStatusType: {
      "ui:widget": "hidden",
    },
    associations: {
      "ui:field": "ignoreField",
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  activityEmail: {
    entity: {
      "ui:widget": "hidden",
    },
    recordStatusType: {
      "ui:widget": "hidden",
    },
    associations: {
      "ui:field": "ignoreField",
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  activityCall: {
    entity: {
      "ui:widget": "hidden",
    },
    recordStatusType: {
      "ui:widget": "hidden",
    },
    associations: {
      "ui:field": "ignoreField",
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  deal: {
    entity: {
      "ui:widget": "hidden",
    },
    recordStatusType: {
      "ui:widget": "hidden",
    },
    associations: {
      dealSalesPersons: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.firstName[0].val",
      },
      dealAccount: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.name[0].val",
      },
      dealAccountContacts: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.firstName[0].val",
      },
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  note: {
    entity: {
      "ui:widget": "hidden",
    },
    recordstatustype: {
      "ui:widget": "hidden",
    },
    associations: {
      "ui:field": "ignorefield",
    },
    reverseassociations: {
      "ui:field": "ignorefield",
    },
  },
  person: {
    entity: {
      "ui:widget": "hidden",
    },
    recordstatustype: {
      "ui:widget": "hidden",
    },
    associations: {
      personContacts: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.firstName[0].val",
      },
      personNotes: {
        "ui:field": "association",
        "ui:value": "data.id",
        "ui:label": "data.fields.title[0].val",
      },
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
};

export { samples, uiSchemaSamples };
