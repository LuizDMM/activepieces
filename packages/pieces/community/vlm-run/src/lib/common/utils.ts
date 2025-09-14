import { ApFile } from '@activepieces/pieces-framework';

export const convertApFileToFile = (file: ApFile): File => {
  const backing = file.data.buffer as ArrayBuffer;
  const ab = backing.slice(
    file.data.byteOffset,
    file.data.byteOffset + file.data.byteLength
  );
  return new File([ab], file.filename, {
    type: 'application/octet-stream',
  });
};
