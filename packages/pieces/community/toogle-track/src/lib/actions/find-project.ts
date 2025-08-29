import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth } from '../common';

export const findProject = createAction({
  auth: tooglTrackAuth,
  name: 'findProject',
  displayName: 'Find Project',
  description: 'Find a project by name.',
  props: {},
  async run() {
    // Action logic here
  },
});
