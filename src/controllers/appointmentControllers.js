import appointmentServices from "../services/appointmentServices.js";

async function create(req, res) {
    const { horary_id } = req.body;

    try {
        const user = res.locals.user;
        await appointmentServices.create({ user_id: user.id, horary_id });
        return res.sendStatus(201);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
async function findAppointmentsUsers(req, res) {
    try {
        const user = res.locals.user;
        const appointments = await appointmentServices.findAppointmentsUsers(user.id);
        return res.send(appointments);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
async function findAppointmentsDoctors(req, res) {
    try {
        const user = res.locals.user;
        const appointments = await appointmentServices.findAppointmentsDoctors(user.id);
        return res.send(appointments);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
async function putAppointmentsDoctors(req, res) {
    const { appointment_id } = req.params;
    try {
        const user = res.locals.user;
        await appointmentServices.putAppointmentsDoctors({ user_id: user.id, appointment_id });
        return res.sendStatus(204);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
async function deleteAppointmentsDoctors(req, res) {
    const { appointment_id } = req.params;
    try {
        const user = res.locals.user;
        await appointmentServices.deleteAppointmentsDoctors({ user_id: user.id, appointment_id });
        return res.sendStatus(204);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
export default {
    create,
    findAppointmentsUsers,
    findAppointmentsDoctors,
    putAppointmentsDoctors,
    deleteAppointmentsDoctors
};