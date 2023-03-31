import doctorServices from "../services/doctorServices.js";

async function create(req, res) {

    const { CRM, specialty, location } = req.body;
    try {
        const user = res.locals.user;
        await doctorServices.create({ CRM, specialty, location, user_id: user.id });
        return res.sendStatus(201);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
async function createHoraries(req, res) {

    const { horary } = req.body;
    try {
        const user = res.locals.user;
        await doctorServices.createHorary({ horary, user_id: user.id });
        return res.sendStatus(201);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
async function findDoctors(req, res) {
    const name = req.query.name;
    const specialty = req.query.specialty;
	const location = req.query.location;

    try {
        const doctors = await doctorServices.findDoctor({ name, specialty, location });
        return res.send(doctors);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
async function findDates(req, res) {
    const { doctor_id } = req.params;

    try {
        const dates = await doctorServices.findDates(Number(doctor_id));
        return res.send(dates);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
export default {
    create,
    findDoctors,
    createHoraries,
    findDates
};