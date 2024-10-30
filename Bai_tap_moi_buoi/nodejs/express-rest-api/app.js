const express = require('express');
const app = express();
const post = 3000;

app.use(express.json());

app.listen(post, () => {
    console.log(`Server is running at http://localhost:${post}`);
});

app.get('/users', (req,res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'jane Smith'}
    ]);
});