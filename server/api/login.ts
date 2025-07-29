import { readFile } from 'fs/promises';
import { join } from 'path';
import Buffer from 'buffer';
import type { UserModel } from '~/utils/user.model';

export default defineEventHandler(async event => {
    const file = join(process.cwd(), 'server/data/users.json');
    if (event.req.method === 'POST') {
        const data = await readFile(file, 'utf-8');
        const users: UserModel[] = JSON.parse(data);
        const { email, password } = await readBody(event);
        const user = users.find((u: UserModel) => {
            const decodedPassword = Buffer.Buffer.from(u.password, 'base64').toString('utf-8');

            return u.email === email && decodedPassword === password;
        });

        if (user) {
            const { password: _, ...userWithoutPassword } = user;

            return userWithoutPassword;
        } else {
            throw createError({
                statusCode: 401,
                statusMessage: 'Credenciales incorrectas'
            });
        }
    }
});
