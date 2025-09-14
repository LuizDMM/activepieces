import { FilePredictionParams, ImagePredictionParams } from 'vlmrun';

export interface AuthenticationParams {
  apiKey: string;
}

export interface UploadFileParams extends AuthenticationParams {
  file: File;
}

export interface AnalyzeAudioParams
  extends AuthenticationParams,
    Omit<FilePredictionParams, 'domain'> {}

export interface AnalyzeImageParams
  extends AuthenticationParams,
    ImagePredictionParams {}

export interface AnalyzeDocumentParams
  extends AuthenticationParams,
    FilePredictionParams {}

export interface AnalyzeVideoParams
  extends AuthenticationParams,
    FilePredictionParams {}

export interface GetFileParams extends AuthenticationParams {
  fileId: string;
}
