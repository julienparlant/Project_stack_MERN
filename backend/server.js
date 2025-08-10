import express from 'express';

const app = express();

app.get('/api/notes', (req, res) => {
    res.status(200).send('You have reached the API');
    }),

app.post('/api/notes', (req, res) => {
    res.status(201).send('Note created');
}),

app.put('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Note with ID ${id} updated`);
}),

app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Note with ID ${id} deleted`);
}),

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
