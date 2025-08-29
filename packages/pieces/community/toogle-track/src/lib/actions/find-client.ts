import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth } from '../common';

export const findClient = createAction({
  auth: tooglTrackAuth,
  name: 'findClient',
  displayName: 'Find Client',
  description: 'Find a client by name or status.',
  props: {},
  async run() {
    // Action logic here
  },
});
