const express = require('express');
const router = express.Router();
const db = require('../configs/database');

router.get('/', (req, res) => {
    db.query('SELECT * FROM todos', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});
module.exports = router;

router.post('/', (req, res) => {
    const { title, description, due_date } = req.body;
    db.query('INSERT INTO todos (title, description, due_date) VALUES (?, ?, ?)', [title, description, due_date], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ id: result.insertId, title, description, due_date, completed: 0});
    });
});

router.put('/:id', (req, res) => {
    const { title, description, due_date, completed } = req.body;
    const { id } = req.params;
    db.query('UPDATE todos SET title = ?, description = ?, due_date = ?, completed = ? WHERE id = ?', 
    [title, description, due_date, completed, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Todo updated successfully' });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM todos WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Todo deleted successfully' });
    });
});

module.exports = router;