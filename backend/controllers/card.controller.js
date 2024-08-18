import Card from "../models/card.model.js";

const createCard = async (req, res) => {
    try {
        const { title, description } = req.body
        const card = new Card({ title, description });

        await card.save()

        res.status(201).json(card)
    } catch (error) {
        if (error.code === 11000) {
            const duplicateKey = Object.keys(error.keyValue)[0];
            const message = `The ${duplicateKey} '${error.keyValue[duplicateKey]}' already exists.`;
            res.status(400).json({ error: message });
        } else {
            res.status(500).json({ error: 'An error occurred while creating the card.' });
        }
    }
}

const getAllCard = async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCardByTitle = async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) return res.status(404).json({ error: 'Card not found' });
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { createCard, getAllCard, getCardByTitle }