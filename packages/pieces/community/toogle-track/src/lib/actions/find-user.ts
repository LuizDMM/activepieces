import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth } from '../common';

export const findUser = createAction({
  auth: tooglTrackAuth,
  name: 'findUser',
  displayName: 'Find User',
  description: 'Locate a user in a workspace.',
  props: {},
  async run() {
    // Action logic here
  },
});
