import { PieceAuth } from '@activepieces/pieces-framework';
import { VlmRun } from 'vlmrun';
import {
  AnalyzeAudioParams,
  AnalyzeDocumentParams,
  AnalyzeImageParams,
  AnalyzeVideoParams,
  GetFileParams,
  UploadFileParams,
} from './types';

export const vlmRunAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  description: 'Your VLM Run API Key',
  required: true,
});

export const vlmRunCommon = {
  getClient: (apiKey: string) => {
    return new VlmRun({ apiKey });
  },
  uploadFile: async ({ apiKey, file }: UploadFileParams) => {
    const client = vlmRunCommon.getClient(apiKey);
    return await client.files.upload({ file });
  },
  listFiles: async (apiKey: string) => {
    const client = vlmRunCommon.getClient(apiKey);
    return await client.files.list();
  },
  analyzeAudio: async ({ apiKey, ...params }: AnalyzeAudioParams) => {
    const client = vlmRunCommon.getClient(apiKey);
    const domain = 'audio.transcription';
    return await client.audio.generate({ domain, ...params });
  },
  analyzeImage: async ({ apiKey, ...params }: AnalyzeImageParams) => {
    const client = vlmRunCommon.getClient(apiKey);
    return await client.image.generate(params);
  },
  analyzeDocument: async ({ apiKey, ...params }: AnalyzeDocumentParams) => {
    const client = vlmRunCommon.getClient(apiKey);
    return await client.document.generate(params);
  },
  analyzeVideo: async ({ apiKey, ...params }: AnalyzeVideoParams) => {
    const client = vlmRunCommon.getClient(apiKey);
    return await client.video.generate(params);
  },
  getFile: async ({ apiKey, fileId }: GetFileParams) => {
    const client = vlmRunCommon.getClient(apiKey);
    return await client.files.get(fileId);
  },
};
