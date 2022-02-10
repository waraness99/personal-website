const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_BASE_NAME);

const minifyRecords = (records) => {
  return records.map((record) => getMinifyRecord(record));
};

const getMinifyRecord = (record) => {
  if (!record.fields.currentPosition) {
    record.fields.currentPosition = false;
  }

  return {
    id: record.id,
    fields: record.fields,
  };
};

export default async function handler(req, res) {
  try {
    const records = await table.select({}).firstPage();
    const minifiedRecords = minifyRecords(records);
    res.setStatus = 200;
    res.status(200).json(minifiedRecords);
  } catch (err) {
    res.setStatus = 500;
    res.json({ msg: "Something went wrong" });
  }
}