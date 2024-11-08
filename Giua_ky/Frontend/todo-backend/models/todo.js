const db = require('../config/database');

const Todo = {
    getAll: (callback) => {
        db.query('SELECT * FROM todos ORDER BY due_date ASC', callback);
    },

    create: (title, description, due_date, callback) => {
        const query = `
            INSERT INTO todos (title, description, due_date, completed, created_at) 
            VALUES (?, ?, ?, 0, NOW())
        `;
        db.query(query, [title, description, due_date], callback);
    },

    update: (id, title, description, due_date, completed, callback) => {
        const query = `
            UPDATE todos 
            SET title = ?, 
                description = ?, 
                due_date = ?, 
                completed = ?,
                updated_at = NOW()
            WHERE id = ?
        `;
        db.query(query, [title, description, due_date, completed, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM todos WHERE id = ?', [id], callback);
    }
}

module.exports = Todo;