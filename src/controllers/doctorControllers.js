import doctorServices from "../services/doctorServices.js";

async function create(req, res, next) {

    const { crm, specialty, location } = req.body;
    try {
        const user = res.locals.user;
        await doctorServices.create({ crm, specialty, location, user_id: user.id });
        return res.sendStatus(201);
    } catch (err) {
        next(err);
    }
}
async function createHoraries(req, res, next) {

    const { horary } = req.body;
    try {
        const user = res.locals.user;
        await doctorServices.createHorary({ horary, user_id: user.id });
        return res.sendStatus(201);
    } catch (err) {
        next(err);
    }
}
async function findDoctors(req, res, next) {
    const name = req.query.name;
    const specialty = req.query.specialty;
	const location = req.query.location;

    try {
        const doctors = await doctorServices.findDoctor({ name, specialty, location });
        return res.send(doctors);
    } catch (err) {
        next(err);
    }
}
async function findDates(req, res, next) {
    const { doctor_id } = req.params;

    try {
        const dates = await doctorServices.findDates(Number(doctor_id));
        return res.send(dates);
    } catch (err) {
        next(err);
    }
}
export default {
    create,
    findDoctors,
    createHoraries,
    findDates
};