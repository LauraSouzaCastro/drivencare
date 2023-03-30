import userServices from "../services/userServices.js";

async function create(req, res) {
    const { name, email, password } = req.body;
    try {
        await userServices.create({ name, email, password });
        return res.sendStatus(201);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

async function signin(req, res) {
    const { email, password } = req.body;
    try {
        const token = await userServices.signin({ email, password });
        return res.send({ token });
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

async function createDoctor(req, res) {
    const { CRM, specialty, location } = req.body;
    try {
        const user = res.locals.user;
        await userServices.createDoctor({ CRM, specialty, location, user_id: user.id });
        return res.sendStatus(201);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

export default {
    create,
    signin,
    createDoctor
};