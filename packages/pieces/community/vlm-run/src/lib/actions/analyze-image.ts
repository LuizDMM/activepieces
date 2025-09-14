import { propsValidation } from '@activepieces/pieces-common';
import { createAction } from '@activepieces/pieces-framework';
import { vlmRunAuth, vlmRunCommon } from '../common';
import { analyzeImageProperties } from '../common/properties';
import { analyzeImageSchema } from '../common/schemas';
import { convertApFileToFile } from '../common/utils';

export const analyzeImage = createAction({
  auth: vlmRunAuth,
  name: 'analyzeImage',
  displayName: 'Analyze Image',
  description:
    'Process an image (file or URL), extracting descriptions, detecting objects, etc.',
  props: analyzeImageProperties,
  async run({ auth: apiKey, propsValue }) {
    await propsValidation.validateZod(propsValue, analyzeImageSchema);

    const { image, domain } = propsValue;
    const file = convertApFileToFile(image);
    const uploadResponse = await vlmRunCommon.uploadFile({
      apiKey,
      file,
    });

    return await vlmRunCommon.analyzeImage({
      apiKey,
      images: [uploadResponse.id],
      domain,
    });
  },
});
