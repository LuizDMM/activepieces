import { propsValidation } from '@activepieces/pieces-common';
import { createAction } from '@activepieces/pieces-framework';
import { vlmRunAuth, vlmRunCommon } from '../common';
import { analyzeAudioProperties } from '../common/properties';
import { analyzeAudioSchema } from '../common/schemas';
import { convertApFileToFile } from '../common/utils';

export const analyzeAudio = createAction({
  auth: vlmRunAuth,
  name: 'analyzeAudio',
  displayName: 'Analyze Audio',
  description: 'Process an audio file, extracting features or transcription',
  props: analyzeAudioProperties,
  async run({ auth: apiKey, propsValue }) {
    await propsValidation.validateZod(propsValue, analyzeAudioSchema);

    const file = convertApFileToFile(propsValue.audio);

    const uploadResponse = await vlmRunCommon.uploadFile({
      apiKey,
      file,
    });

    return await vlmRunCommon.analyzeAudio({
      apiKey,
      fileId: uploadResponse.id,
    });
  },
});
