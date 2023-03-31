import doctorRepositories from "../repositories/doctorRepositories.js";

async function create({ CRM, specialty, location, user_id }) {
    const { rowCount } = await doctorRepositories.findDoctorByUserId(user_id);
    if (rowCount) throw new Error("Doctor already exists");

    await doctorRepositories.create({ CRM, specialty, location, user_id });

}
async function createHorary({ horary, user_id }) {
    const { rowCount, rows: [doctor] } = await doctorRepositories.findDoctorByUserId(user_id);

    if (!rowCount) throw new Error("Doctor not exists");

    await doctorRepositories.createHorary({ doctor_id: doctor.id, horary });

}
async function findDoctor({ name, specialty, location }) {
    let doctors;
    if(name || specialty || location ){
        const { rows } =  await doctorRepositories.findDoctorByQueryString({ name, specialty, location });
        doctors = rows
    }else{
        const { rows } =  await doctorRepositories.findDoctor();
        doctors = rows
    }
    
    return doctors
}
async function findDates(doctor_id) {
    const { rows } =  await doctorRepositories.findDates(doctor_id);
    return rows;
}
export default {
    create,
    findDoctor,
    createHorary,
    findDates
};