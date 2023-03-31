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
async function findAppointmentsUsers(user_id, finished) {
    return await connectionDb.query(
    `    
        SELECT appointments.id as appointment_id, horaries.horary, users.name as doctor, doctors.specialty
        FROM appointments 
        JOIN horaries ON horaries.id = appointments.doctor_horary_id
        JOIN doctors ON horaries.doctor_id = doctors.id
        JOIN users ON doctors.user_id = users.id
        WHERE appointments.user_id = $1 AND finished = $2
    `,
        [user_id, finished]
    );
}
async function findAppointmentsDoctors(user_id, finished) {
    return await connectionDb.query(
    `    
        SELECT appointments.id as appointment_id, horaries.horary, users.name as patient, doctors.specialty
        FROM appointments 
        JOIN horaries ON horaries.id = appointments.doctor_horary_id
        JOIN doctors ON horaries.doctor_id = doctors.id
        JOIN users ON appointments.user_id = users.id
        WHERE horaries.doctor_id = $1 AND finished = $2
    `,
        [user_id, finished]
    );
}
async function findAppointmentsDoctorsById(appointment_id) {
    return await connectionDb.query(
    `    
        SELECT users.id as doctor_id, appointments.finished, horaries.id as horary_id
        FROM appointments 
        JOIN horaries ON horaries.id = appointments.doctor_horary_id
        JOIN doctors ON horaries.doctor_id = doctors.id
        JOIN users ON doctors.user_id = users.id
        WHERE appointments.id = $1
    `,
        [appointment_id]
    );
}
async function putAppointmentsDoctors(appointment_id) {
    await connectionDb.query(
    `
        UPDATE appointments SET "finished" = true WHERE id = $1;
    `,
        [appointment_id]
    );
}
async function deleteAppointmentsDoctors(appointment_id, horary_id) {
    await connectionDb.query(
    `
        UPDATE horaries SET "available" = true WHERE id = $1;
    `,
        [horary_id]
    );
    await connectionDb.query(
    `
        delete from appointments WHERE id = $1;
    `,
        [appointment_id]
    );
}
export default {
    create,
    findDateByHoraryId,
    findAppointmentsUsers,
    findAppointmentsDoctors,
    findAppointmentsDoctorsById,
    putAppointmentsDoctors,
    deleteAppointmentsDoctors
};