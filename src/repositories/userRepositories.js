import connectionDb from "../config/database.js";

async function findByEmail(email) {
    return await connectionDb.query(
    `    
        SELECT * FROM users WHERE email=$1
    `,
        [email]
    );
}

async function create({ name, email, password, cpf }) {
    await connectionDb.query(
    `
        INSERT INTO users (name, email, password, cpf)
        VALUES ($1, $2, $3, $4)
    `,
        [name, email, password, cpf]
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

export default {
    findByEmail,
    create,
    findById
};