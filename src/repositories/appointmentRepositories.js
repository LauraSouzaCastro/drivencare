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
async function findAppointments(user_id) {
    return await connectionDb.query(
    `    
        SELECT horaries.horary, users.name as doctor, doctors.specialty
        FROM appointments 
        JOIN horaries ON horaries.id = appointments.doctor_horary_id
        JOIN doctors ON horaries.doctor_id = doctors.id
        JOIN users ON doctors.user_id = users.id
        WHERE appointments.user_id = $1
    `,
        [user_id]
    );
}
export default {
    create,
    findDateByHoraryId,
    findAppointments
};