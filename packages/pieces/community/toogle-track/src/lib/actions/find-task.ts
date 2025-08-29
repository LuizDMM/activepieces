import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth } from '../common';

export const findTask = createAction({
  auth: tooglTrackAuth,
  name: 'findTask',
  displayName: 'Find Task',
  description: 'Find a task by name and status.',
  props: {},
  async run() {
    // Action logic here
  },
});
