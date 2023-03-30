import connectionDb from "../config/database.js";

async function findDoctorByUserId(user_id) {
    return await connectionDb.query(
    `    
        SELECT * FROM doctors WHERE user_id=$1
    `,
        [user_id]
    );
}

async function create({ CRM, specialty, location, user_id }) {
    await connectionDb.query(
    `
        INSERT INTO doctors ( "CRM", specialty, location, user_id )
        VALUES ($1, $2, $3, $4)
    `,
        [CRM, specialty, location, user_id]
    );
}

async function findDoctorByQueryString({ name, specialty, location }) {
    return await connectionDb.query(
    `    
        SELECT users.name, doctors."CRM", doctors.specialty, doctors.location 
        FROM doctors
        JOIN users ON users.id = doctors.user_id
        WHERE users.name = $1 OR doctors.specialty = $2 OR doctors.location = $3
    `,
        [name, specialty, location]
    );
}

async function findDoctor() {
    return await connectionDb.query(
    `    
        SELECT users.name, doctors."CRM", doctors.specialty, doctors.location 
        FROM doctors
        JOIN users ON users.id = doctors.user_id
    `);
}

export default {
    create,
    findDoctorByUserId,
    findDoctor,
    findDoctorByQueryString
};