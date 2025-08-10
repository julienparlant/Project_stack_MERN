export function getAllNotes(req, res) {
    res.status(200).send('All notes retrieved');
} 

export function createNote(req, res) {
    res.status(201).send('Note created');
}

export function updateNote(req, res) {
    const { id } = req.params;
    res.status(200).send(`Note with ID ${id} updated`);
}

export function deleteNote(req, res) {
    const { id } = req.params;
    res.status(200).send(`Note with ID ${id} deleted`);
}
