import type { S3ClientConfig } from '@aws-sdk/client-s3';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';

type Params = {
  bucket: string;
};

export class FileS3BucketService {
  private readonly client: S3Client;
  constructor(private params: Params, client: S3ClientConfig | S3Client) {
    this.client = client instanceof S3Client ? client : new S3Client(client);
  }
  upload = async (file: string | Uint8Array | Buffer, key: string) => {
    return this.client.send(
      new PutObjectCommand({
        Bucket: this.params.bucket,
        Key: key,
        Body: file,
      })
    );
  };
  delete = async (key: string) => {
    return this.client.send(
      new DeleteObjectCommand({
        Bucket: this.params.bucket,
        Key: key,
      })
    );
  };
}
