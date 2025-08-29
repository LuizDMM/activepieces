import { propsValidation } from '@activepieces/pieces-common';
import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth, tooglTrackCommon } from '../common';

export const createProject = createAction({
  auth: tooglTrackAuth,
  name: 'createProject',
  displayName: 'Create Project',
  description:
    'Create a new project (with properties like template, privacy, billable, client).',
  props: tooglTrackCommon.createProjectProperties,
  async run({ auth, propsValue }) {
    propsValidation.validateZod(
      propsValue,
      tooglTrackCommon.createProjectSchema
    );
    // Map rate_change_mode to the correct union type
    const { rate_change_mode, ...rest } = propsValue;
    const mappedRateChangeMode = rate_change_mode as
      | 'start-today'
      | 'override-current'
      | 'override-all'
      | undefined;

    return await tooglTrackCommon.createProject({
      auth,
      workspaceId: propsValue.workspaceId,
      projectData: {
        ...rest,
        rate_change_mode: mappedRateChangeMode,
      },
    });
  },
});
