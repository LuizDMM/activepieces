import { propsValidation } from '@activepieces/pieces-common';
import { createAction } from '@activepieces/pieces-framework';
import { vlmRunAuth, vlmRunCommon } from '../common';
import { analyzeVideoProperties } from '../common/properties';
import { analyzeVideoSchema } from '../common/schemas';
import { convertApFileToFile } from '../common/utils';

export const analyzeVideo = createAction({
  auth: vlmRunAuth,
  name: 'analyzeVideo',
  displayName: 'Analyze Video',
  description:
    'Analyze a video file or URL, e.g. extract frames, detect content, etc.',
  props: analyzeVideoProperties,
  async run({ auth: apiKey, propsValue }) {
    await propsValidation.validateZod(propsValue, analyzeVideoSchema);

    const { video, domain } = propsValue;
    const file = convertApFileToFile(video);
    const uploadResponse = await vlmRunCommon.uploadFile({
      apiKey,
      file,
    });

    return await vlmRunCommon.analyzeVideo({
      apiKey,
      fileId: uploadResponse.id,
      domain,
    });
  },
});
