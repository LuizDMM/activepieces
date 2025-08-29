import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth, tooglTrackCommon } from '../common';

export const createClient = createAction({
  auth: tooglTrackAuth,
  name: 'createClient',
  displayName: 'Create Client',
  description: 'Create a new client in a workspace.',
  props: tooglTrackCommon.createClientProperties,
  async run({ auth, propsValue }) {
    const clientData = {
      external_reference: propsValue.externalReference,
      name: propsValue.name,
      notes: propsValue.notes,
    };
    return await tooglTrackCommon.createClient({
      auth,
      workspaceId: propsValue.workspaceId,
      clientData,
    });
  },
});
