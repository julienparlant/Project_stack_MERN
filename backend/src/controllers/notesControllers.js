import Note from '../models/Note.js';

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // Trie côté MongoDB
        res.status(200).json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: 'Error fetching notes', error: error.message });
    }
}

export async function getNoteById(req, res) {
    const { id } = req.params;
    try {
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error('Error fetching note:', error);
        res.status(500).json({ message: 'Error fetching note', error: error.message });
    }
}

export async function createNote(req, res) {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    try {
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ message: 'Error creating note', error: error.message });
    }
}

export async function updateNote(req, res) {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }
    try {
        const { id } = req.params;
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error('Error updating note:', error);
        res.status(500).json({ message: 'Error updating note', error: error.message });
    }
}

export async function deleteNote(req, res) {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({ message: 'Error deleting note', error: error.message });
    }
}


