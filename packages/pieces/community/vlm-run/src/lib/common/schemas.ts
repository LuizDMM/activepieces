import { ApFile } from "@activepieces/pieces-framework";
import z from 'zod';

const imageDomains = [
  'image.classification',
  'image.caption',
  'image.tv-news',
  'image.q-and-a',
] as const;

const documentDomains = [
  'document.bank-statement',
  'document.classification',
  'document.invoice',
  'document.markdown',
  'document.q-and-a',
  'document.receipt',
  'document.resume',
  'document.us-drivers-license',
  'document.utility-bill',
] as const;

const videoDomains = [
    'video.transcription',
    'video.transcription-summary',
    'video.product-demo-summary',
    'video.conferencing-summary',
    'video.podcast-summary',
    'video.summary',
    'video.dashcam-analytics'
] as const;

// Schemas
export const analyzeAudioSchema = {
    audio: z.instanceof(ApFile)
};

export const analyzeImageSchema = {
    image: z.instanceof(ApFile),
    domain: z.enum(imageDomains)
};

export const analyzeDocumentSchema = {
    document: z.instanceof(ApFile),
    domain: z.enum(documentDomains)
};

export const analyzeVideoSchema = {
    video: z.instanceof(ApFile),
    domain: z.enum(videoDomains)
};

export const getFileSchema = {
    fileId: z.string()
};
