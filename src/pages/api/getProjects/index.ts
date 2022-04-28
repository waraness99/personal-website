const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const table = base("projects");

const minifyRecords = (records: any) => {
  return records.map((record: any) => getMinifyRecord(record));
};

const getMinifyRecord = (record: any) => {
  if (record.fields.primaryImage) {
    record.fields.primaryImage = record.fields.primaryImage[0].url;
  }

  return {
    id: record.id,
    fields: record.fields,
  };
};

export default async function handler(req: any, res: any) {
  try {
    const records = await table
      .select({
        view: "published",
        fields: ["name", "shortDescription", "date", "primaryImage", "technicalStack"],
      })
      .firstPage();
    const minifiedRecords = minifyRecords(records);
    res.setStatus = 200;
    res.status(200).json(minifiedRecords);
  } catch (err) {
    res.setStatus = 500;
    res.json({ msg: "Something went wrong" });
  }
}
