import { propsValidation } from '@activepieces/pieces-common';
import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth, tooglTrackCommon } from '../common';

export const createTask = createAction({
  auth: tooglTrackAuth,
  name: 'createTask',
  displayName: 'Create Task',
  description: 'Create a new task under a project.',
  props: tooglTrackCommon.createTaskProperties,
  async run({ auth, propsValue }) {
    propsValidation.validateZod(propsValue, tooglTrackCommon.createTaskSchema);
    return await tooglTrackCommon.createTask({
      auth,
      workspaceId: propsValue.workspaceId,
      projectId: propsValue.projectId,
      taskData: propsValue,
    });
  },
});
