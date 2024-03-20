import { Pet, columns } from './columns';
import { DataTable } from './data-table';

const sql = require('mssql');

const config = {
  server: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

// const connectionStr =
//   'server=.;initial catalog=db1080944_adoptagoldenatla;trusted_connection=true';

const query = `SELECT TOP (100) *
FROM [db1080944_adoptagoldenatla].[adoptagoldenatla].[DogList];`;

async function getPets(): Promise<Pet[]> {
  try {
    await sql.connect(config);
    const result = await sql.query(query);
    const data = result.recordset;
    // console.log(data);
    return data;
  } catch (err) {
    console.error('Error retrieving pets:', err);
    throw err;
  }
}

export default async function Page() {
  try {
    const data = await getPets();
    // console.log('my data:', data);

    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}
