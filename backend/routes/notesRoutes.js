import express from 'express';

const router = express.Router();

export default router;

router.get('/', (req, res) => {
    res.status(200).send('You have reached the API');
});

router.post('/', (req, res) => {
    res.status(201).send('Note created');
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Note with ID ${id} updated`);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Note with ID ${id} deleted`);
});

