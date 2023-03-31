import appointmentRepositories from "../repositories/appointmentRepositories.js";

async function create({ user_id, horary_id }) {
    const { rowCount } = await appointmentRepositories.findDateByHoraryId(horary_id);
    if (!rowCount) throw new Error("Horary is not available");

    await appointmentRepositories.create({ user_id, horary_id });

}

export default {
    create
};