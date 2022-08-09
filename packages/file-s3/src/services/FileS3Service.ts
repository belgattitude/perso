import type { S3ClientConfig } from '@aws-sdk/client-s3';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';

export class FileS3Service {
  private client: S3Client;
  constructor(params: S3ClientConfig) {
    this.client = new S3Client(params);
  }
  upload = async () => {
    return this.client.send(
      new PutObjectCommand({
        Key: '',
        Bucket: '',
        Body: '',
      })
    );
  };
  delete = async () => {
    return this.client.send(
      new DeleteObjectCommand({
        Key: '',
        Bucket: '',
      })
    );
  };
}
