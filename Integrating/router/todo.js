"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get('/', (req, res, next) => {
    console.log('get rout');
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    console.log('/todo', req.body.text);
    const newTodo = {
        id: req.body.id,
        text: req.body.text
    };
    console.log(newTodo);
    todos.push(newTodo);
    res.send(todos);
});
router.post('/delete', (req, res) => {
    const id = req.body.id;
    let arryIndex = -1;
    todos.forEach((obj, index) => {
        if (obj.id === id) {
            arryIndex = index;
        }
    });
    if (arryIndex !== -1) {
        todos.splice(arryIndex, 1);
        res.status(202).json(todos);
    }
    else {
        res.status(404).json({ message: "Id is not found" });
    }
});
router.post('/edit', (req, res) => {
    const id = req.body.id;
    console.log(req.body.text);
    let arryIndex = -1;
    todos.forEach((obj, index) => {
        if (obj.id === id) {
            arryIndex = index;
        }
    });
    if (arryIndex !== -1) {
        todos[arryIndex].id = id;
        todos[arryIndex].text = req.body.text;
        res.status(202).json(todos);
    }
    else {
        res.status(404).json({ "message": "object is not find" });
    }
});
exports.default = router;
