const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const table = base("projects");

const minifyRecord = (record: any) => {
  if (record.fields.primaryImage) {
    record.fields.primaryImage = record.fields.primaryImage[0].url;
  }
  if (record.fields.images) {
    record.fields.images = record.fields.images.map((oneImage: { url: string; filename: string }) => {
      return {
        url: oneImage.url,
        name: oneImage.filename.split(".")[0],
      };
    });
  }

  return {
    id: record.id,
    fields: record.fields,
  };
};

export default async function handler(req: any, res: any) {
  try {
    const record = await table.find(req.query.id);
    const minifiedRecord = minifyRecord(record);
    res.setStatus = 200;
    res.status(200).json(minifiedRecord);
  } catch (err) {
    res.setStatus = 500;
    res.json({ msg: err });
  }
}
