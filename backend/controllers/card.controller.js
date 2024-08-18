import Card from "../models/card.model.js";

const createCard = async (req, res) => {
    try {
        const { title, description } = req.body
        const card = new Card({ title, description });

        await card.save()

        res.status(201).json(card)
    } catch (error) {
        res.status(400).json({ error: error.message });
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