import { Pet, columns } from './columns';
import { DataTable } from './data-table';
const { ConnectionPool } = require('mssql/msnodesqlv8');

const client = require('mssql/msnodesqlv8');

const connectionString =
  'server=.;Database=Master;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}';

// const config = {
//   server: 'LUCID-PC\\SQLEXPRESS',
//   database: 'db1080944_adoptagoldenatla',
//   driver: 'msnodesqlv8',
//   options: {
//     trustedConnection: true,
//   },
// };

async function getPets(): Promise<Pet[]> {
  // const pool: ConnectionPool = new client.ConnectionPool(config);
  const pool = new ConnectionPool(connectionString);
  const results: any = await pool.query`SELECT TOP (1) *
    FROM db1080944_adoptagoldenatla.adoptagoldenatla.DogList
  `;
  // const data = await res.json();
  return results.rows[0];
}

export default async function Page() {
  const data = await getPets();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
