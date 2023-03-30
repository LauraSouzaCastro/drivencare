import connectionDb from "../config/database.js";

async function findByEmail(email) {
    return await connectionDb.query(
    `    
        SELECT * FROM users WHERE email=$1
    `,
        [email]
    );
}

async function create({ name, email, password }) {
    await connectionDb.query(
    `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
    `,
        [name, email, password]
    );
}

async function createSession({ token, user_id }) {
    await connectionDb.query(
    `
        INSERT INTO sessions (token, user_id)
        VALUES ($1, $2)
    `,
        [token, user_id]
    );
}

async function findSessionByToken(token) {
    return await connectionDb.query(
    `
        SELECT * FROM sessions WHERE token = $1
    `,
        [token]
    );
}

async function findById(id) {
    return await connectionDb.query(
    `    
        SELECT * FROM users WHERE id=$1
    `,
        [id]
    );
}

async function findDoctorById(user_id) {
    return await connectionDb.query(
    `    
        SELECT * FROM doctors WHERE user_id=$1
    `,
        [user_id]
    );
}

async function createDoctor({ CRM, specialty, location, user_id }) {
    await connectionDb.query(
    `
        INSERT INTO doctors ( "CRM", specialty, location, user_id )
        VALUES ($1, $2, $3, $4)
    `,
        [CRM, specialty, location, user_id]
    );
}
export default {
    findByEmail,
    create,
    createSession,
    findById,
    findSessionByToken,
    findDoctorById,
    createDoctor
};