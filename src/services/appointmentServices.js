import appointmentRepositories from "../repositories/appointmentRepositories.js";
import errors from "../errors/index.js";

async function create({ user_id, horary_id }) {
    const { rowCount } = await appointmentRepositories.findDateByHoraryId(horary_id);
    
    if (!rowCount) throw errors.notAvailableError();

    await appointmentRepositories.create({ user_id, horary_id });

}
async function findAppointmentsUsers(user_id, finished) {
    const { rows } =  await appointmentRepositories.findAppointmentsUsers(user_id, finished);
    return rows;
}
async function findAppointmentsDoctors(user_id, finished) {
    const { rows } =  await appointmentRepositories.findAppointmentsDoctors(user_id, finished);
    return rows;
}
async function putAppointmentsDoctors({user_id, appointment_id}) {

    const { rows: [appointment] } = await appointmentRepositories.findAppointmentsDoctorsById(appointment_id);

    if (appointment.doctor_id !== user_id) throw errors.appointmentIsNotYoursError();
    if (appointment.finished) throw errors.appointmentFinishedError();

    await appointmentRepositories.putAppointmentsDoctors(appointment_id);

}
async function deleteAppointmentsDoctors({user_id, appointment_id}) {
    const { rows: [appointment] } = await appointmentRepositories.findAppointmentsDoctorsById(appointment_id);

    if (appointment.doctor_id !== user_id) throw errors.appointmentIsNotYoursError();
    if (appointment.finished) throw errors.appointmentFinishedError();

    await appointmentRepositories.deleteAppointmentsDoctors(appointment_id, appointment.horary_id);
}
export default {
    create,
    findAppointmentsUsers,
    findAppointmentsDoctors,
    putAppointmentsDoctors,
    deleteAppointmentsDoctors
};