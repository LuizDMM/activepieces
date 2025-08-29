import { propsValidation } from '@activepieces/pieces-common';
import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth, tooglTrackCommon } from '../common';

export const startTimeEntry = createAction({
  auth: tooglTrackAuth,
  name: 'startTimeEntry',
  displayName: 'Start Time Entry',
  description: 'Start a live time entry.',
  props: tooglTrackCommon.startTimeEntryProperties,
  async run({ auth, propsValue }) {
    propsValidation.validateZod(propsValue, tooglTrackCommon.startTimeEntrySchema);
    const { workspaceId, timeEntryId } = propsValue;
    return await tooglTrackCommon.startTimeEntry({ auth, workspaceId, timeEntryId });
  },
});
