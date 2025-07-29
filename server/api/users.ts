import { readFile } from 'fs/promises';
import { join } from 'path';
import type { UserModel } from '~/utils/user.model';

export default defineEventHandler(async event => {
    const file = join(process.cwd(), 'server/data/users.json');
    if (event.req.method === 'GET') {
        const data = await readFile(file, 'utf-8');
        return JSON.parse(data).map((u: UserModel) => {
            const { id, email, name, createdAt, updatedAt, country, role } = u;

            return { id, email, name, createdAt, updatedAt, country, role };
        });
    }
});
