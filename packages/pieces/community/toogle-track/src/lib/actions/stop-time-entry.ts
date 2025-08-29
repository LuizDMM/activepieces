import { propsValidation } from '@activepieces/pieces-common';
import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth, tooglTrackCommon } from '../common';

export const stopTimeEntry = createAction({
  auth: tooglTrackAuth,
  name: 'stopTimeEntry',
  displayName: 'Stop Time Entry',
  description: 'Stops the running time entry.',
  props: tooglTrackCommon.stopTimeEntryProperties,
  async run({ auth, propsValue }) {
    propsValidation.validateZod(
      propsValue,
      tooglTrackCommon.stopTimeEntrySchema
    );
    const { workspaceId, timeEntryId } = propsValue;
    return await tooglTrackCommon.stopTimeEntry({
      auth,
      workspaceId,
      timeEntryId,
    });
  },
});
