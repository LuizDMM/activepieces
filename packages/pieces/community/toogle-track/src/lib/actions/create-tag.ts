import { propsValidation } from '@activepieces/pieces-common';
import { createAction } from '@activepieces/pieces-framework';
import { tooglTrackAuth, tooglTrackCommon } from '../common';

export const createTag = createAction({
  auth: tooglTrackAuth,
  name: 'createTag',
  displayName: 'Create Tag',
  description: 'Create a new tag in the workspace.',
  props: tooglTrackCommon.createTagProperties,
  async run({ auth, propsValue }) {
    propsValidation.validateZod(propsValue, tooglTrackCommon.createTagSchema);
    return await tooglTrackCommon.createTag({ auth, ...propsValue });
  },
});
