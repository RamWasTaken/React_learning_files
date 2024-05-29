// file to validate the input of the post request.
const zod = require('zod');
const createTodo = zod.object({
    title: zod.string(),
    desc: zod.string(),
});
const updateTodo = zod.object({
    id: zod.string(),
});

module.exports = {
    createTodo :createTodo,
    updateTodo :updateTodo
}