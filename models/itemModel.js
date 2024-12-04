const db = require('../database');

const Item = {
    getAll: (callback) => {
        db.all('SELECT * FROM items', callback);
    },
    create: (name, description, callback) => {
        db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], callback);
    },
    update: (id, name, description, callback) => {
        db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id], callback);
    },
    delete: (id, callback) => {
        db.run('DELETE FROM items WHERE id = ?', [id], callback);
    }
};

module.exports = Item;