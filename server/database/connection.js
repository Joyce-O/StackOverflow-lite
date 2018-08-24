import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
    connectionString: process.env.LOCAL_DB || process.env.DATABASE_URL
});

export default pool;
