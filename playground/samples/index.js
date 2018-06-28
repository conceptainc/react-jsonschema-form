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
    entity: {
      "ui:widget": "hidden",
    },
    recordStatusType: {
      "ui:widget": "hidden",
    },
    associations: {
      accountContacts: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.firstName[0].val",
      },
      accountNotes: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.title[0].val",
      },
      accountDeals: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.name[0].val",
      },
      accountSalesPersons: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.firstName[0].val",
      },
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  activity: {
    associations: {
      activityIsTask: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.description[0].val",
      },
      activityRecipients: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.firstName[0].val",
      },
      activityAccount: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.name[0].val",
      },
      activityDeal: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.name[0].val",
      },
      activityIsEmail: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.title[0].val",
      },
      activityIsCall: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.comments[0].val",
      },
      activityAgent: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.firstName[0].val",
      },
      activityHiddenRecipients: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.firstName[0].val",
      },
      activityOwner: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.firstName[0].val",
      },
      activityIsEvent: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.description[0].val",
      },
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  activityTask: {
    associations: {
      "ui:field": "ignoreField",
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  activityEvent: {
    associations: {
      "ui:field": "ignoreField",
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  activityEmail: {
    associations: {
      "ui:field": "ignoreField",
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  activityCall: {
    associations: {
      "ui:field": "ignoreField",
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
  deal: {
    associations: {
      dealSalesPersons: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.firstName[0].val",
      },
      dealAccount: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.name[0].val",
      },
      dealAccountContacts: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.firstName[0].val",
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
        "ui:value": "id",
        "ui:label": "fields.firstName[0].val",
      },
      personNotes: {
        "ui:field": "association",
        "ui:value": "id",
        "ui:label": "fields.title[0].val",
      },
    },
    reverseAssociations: {
      "ui:field": "ignoreField",
    },
  },
};

export { samples, uiSchemaSamples };
