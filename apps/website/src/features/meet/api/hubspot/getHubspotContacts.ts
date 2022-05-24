import axios from 'axios';

export type HubspotContact = {
  id: string;
  properties: {
    createdate: string;
    email: string;
    firstname: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    hs_object_id: string;
    lastmodifieddate: string;
    lastname: string;
  };
  createdAt: string;
  updatedAt: string;
  archived: boolean;
};

export const getHubspotContacts = async (): Promise<HubspotContact[]> => {
  return axios
    .get(
      'https://api.hubapi.com/crm/v3/objects/contacts?limit=10&archived=false',
      {
        responseType: 'json',
        headers: {
          authorization: `Bearer ${process.env.HUBSPOT_APP_TOKEN} `,
        },
      }
    )
    .then((resp) => resp.data)
    .catch((e) => {
      console.log('Error');
    });
};
