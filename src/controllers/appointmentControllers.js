import appointmentServices from "../services/appointmentServices.js";

async function create(req, res, next) {
    const { horary_id } = req.body;

    try {
        const user = res.locals.user;
        await appointmentServices.create({ user_id: user.id, horary_id });
        return res.sendStatus(201);
    } catch (err) {
        next(err);
    }
}
async function findAppointmentsUsers(req, res, next) {
    let finished = req.query.finished;
    if(!finished) finished = false;
    
    try {
        const user = res.locals.user;
        const appointments = await appointmentServices.findAppointmentsUsers(user.id, finished);
        return res.send(appointments);
    } catch (err) {
        next(err);
    }
}
async function findAppointmentsDoctors(req, res, next) {
    let finished = req.query.finished;
    if(!finished) finished = false;

    try {
        const user = res.locals.user;
        
        const appointments = await appointmentServices.findAppointmentsDoctors(user.id, finished);
        return res.send(appointments);
    } catch (err) {
        next(err);
    }
}
async function putAppointmentsDoctors(req, res, next) {
    const { appointment_id } = req.params;
    try {
        const user = res.locals.user;
        await appointmentServices.putAppointmentsDoctors({ user_id: user.id, appointment_id });
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}
async function deleteAppointmentsDoctors(req, res, next) {
    const { appointment_id } = req.params;
    try {
        const user = res.locals.user;
        await appointmentServices.deleteAppointmentsDoctors({ user_id: user.id, appointment_id });
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}
export default {
    create,
    findAppointmentsUsers,
    findAppointmentsDoctors,
    putAppointmentsDoctors,
    deleteAppointmentsDoctors
};