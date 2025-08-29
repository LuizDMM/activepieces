import { propsValidation } from '@activepieces/pieces-common';
import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth, tooglTrackCommon } from '../common';

export const createTimeEntry = createAction({
  auth: tooglTrackAuth,
  name: 'createTimeEntry',
  displayName: 'Create Time Entry',
  description:
    'Manually create a time entry with start, duration, description, and tags.',
  props: tooglTrackCommon.createTimeEntryProperties,
  async run({ auth, propsValue }) {
    propsValidation.validateZod(
      propsValue,
      tooglTrackCommon.createTimeEntrySchema
    );
    const timeEntryData = {
      workspace_id: propsValue.workspaceId,
      ...propsValue,
      expense_ids: propsValue.expense_ids
        ? (propsValue.expense_ids as number[])
        : undefined,
      tags: propsValue.tags
        ? (propsValue.tags as string[])
        : undefined,
    };
    return await tooglTrackCommon.createTimeEntry({
      auth,
      workspaceId: propsValue.workspaceId,
      timeEntryData,
    });
  },
});
