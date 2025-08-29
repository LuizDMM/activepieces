import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth } from '../common';

export const findTimeEntry = createAction({
  auth: tooglTrackAuth,
  name: 'findTimeEntry',
  displayName: 'Find Time Entry',
  description: 'Finds a time entry by desc.',
  props: {},
  async run() {
    // Action logic here
  },
});
