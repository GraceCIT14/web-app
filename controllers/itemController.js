const Item = require('../models/itemModel');
const fs = require('fs');
const path = require('path');

const itemController = {
    getAllItems: (req, res, next) => {
        Item.getAll((err, rows) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            // Embed data into the HTML dynamically
            const htmlPath = path.join(__dirname, '../views/index.html');
            fs.readFile(htmlPath, 'utf-8', (err, html) => {
                if (err) {
                    return res.status(500).send('Error loading HTML file');
                }

                const rowsHTML = rows
                    .map(
                        (item) => `
                            <tr>
                                <td>${item.id}</td>
                                <td>${item.name}</td>
                                <td>${item.description}</td>
                                <td>
                                    <form action="/delete" method="POST">
                                        <input type="hidden" name="id" value="${item.id}">
                                        <button type="submit" class="delete-btn">Delete</button>
                                    </form>
                                </td>
                            </tr>`
                    )
                    .join('');

                const renderedHTML = html.replace('{{items}}', rowsHTML);
                res.send(renderedHTML);
            });
        });
    },
    createItem: (req, res) => {
        const { name, description } = req.body;
        Item.create(name, description, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.redirect('/');
        });
    },
    updateItem: (req, res) => {
        const { id, name, description } = req.body;
        Item.update(id, name, description, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.redirect('/');
        });
    },
    deleteItem: (req, res) => {
        const { id } = req.body;
        Item.delete(id, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.redirect('/');
        });
    },
};

module.exports = itemController;
