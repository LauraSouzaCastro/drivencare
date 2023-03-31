import connectionDb from "../config/database.js";

async function findDateByHoraryId(horary_id) {
    return await connectionDb.query(
        `    
        SELECT * FROM horaries WHERE id = $1 AND available = true
    `,
        [horary_id]
    );
}

async function create({ user_id, horary_id }) {
    await connectionDb.query(
        `
            INSERT INTO appointments ( user_id,  doctor_horary_id )
            VALUES ($1, $2)
        `,
            [user_id, horary_id]
        );
    await connectionDb.query(
    `
        UPDATE horaries SET "available" = false WHERE id = $1;
    `,
        [horary_id]
    );
}

export default {
    create,
    findDateByHoraryId
};