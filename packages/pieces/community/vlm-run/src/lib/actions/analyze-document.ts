import { propsValidation } from '@activepieces/pieces-common';
import { createAction } from '@activepieces/pieces-framework';
import { vlmRunAuth, vlmRunCommon } from '../common';
import { analyzeDocumentProperties } from '../common/properties';
import { analyzeDocumentSchema } from '../common/schemas';
import { convertApFileToFile } from '../common/utils';

export const analyzeDocument = createAction({
  auth: vlmRunAuth,
  name: 'analyzeDocument',
  displayName: 'Analyze Document',
  description:
    'Process a document (PDF, DOCX, etc.), extracting structured data or text.',
  props: analyzeDocumentProperties,
  async run({ auth: apiKey, propsValue }) {
    await propsValidation.validateZod(propsValue, analyzeDocumentSchema);

    const { document, domain } = propsValue;
    const file = convertApFileToFile(document);
    const uploadResponse = await vlmRunCommon.uploadFile({
      apiKey,
      file,
    });

    return await vlmRunCommon.analyzeDocument({
      apiKey,
      fileId: uploadResponse.id,
      domain,
    });
  },
});
