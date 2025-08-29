import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth } from '../common';

export const findTag = createAction({
  auth: tooglTrackAuth,
  name: 'findTag',
  displayName: 'Find Tag',
  description: 'Find a tag by name.',
  props: {},
  async run() {
    // Action logic here
  },
});
