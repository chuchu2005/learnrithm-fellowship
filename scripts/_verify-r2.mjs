// TEMP — list recent fellowship photos in R2 and show the latest one's metadata.
import { S3Client, ListObjectsV2Command, HeadObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});
const Bucket = process.env.R2_BUCKET_NAME;

const list = await client.send(
  new ListObjectsV2Command({ Bucket, Prefix: "fellowship-applications/", MaxKeys: 10 })
);
const items = (list.Contents || []).sort((a, b) => new Date(b.LastModified) - new Date(a.LastModified));
console.log("Recent objects under fellowship-applications/:");
for (const it of items.slice(0, 5)) console.log("  -", it.Key, "(" + it.Size + " bytes)");

const latest = items[0];
if (latest) {
  const head = await client.send(new HeadObjectCommand({ Bucket, Key: latest.Key }));
  console.log("\nLatest object KEY:", latest.Key);
  console.log("Custom metadata:", JSON.stringify(head.Metadata));
} else {
  console.log("\nNo objects found.");
}
