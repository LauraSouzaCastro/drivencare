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
async function findAppointments(req, res) {
    try {
        const user = res.locals.user;
        const appointments = await appointmentServices.findAppointments(user.id);
        return res.send(appointments);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
export default {
    create,
    findAppointments
};