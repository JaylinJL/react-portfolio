import ContactsModel from "../models/contacts.js";
import { Resend } from "resend";

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactsModel.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getContactsById = async (req, res) => {
    try {
        const contact = await ContactsModel.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createContact = async (req, res) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message } = req.body;

    try {
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: process.env.EMAIL_USER,
            subject: `New message from ${name}`,
            text: `
            Name: ${name}
            Email: ${email}
            Message:${message}`
        });

        res.status(200).json({ message: "Email sent successfully" });

    } catch (error) {
        console.error("Resend error:", error);
        res.status(500).json({ message: "Email failed" });
    }
}

export const updateContact = async (req, res) => {
    try {
        const updatedContact = await ContactsModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteContact = async (req, res) => {
    try {
        const deletedContact = await ContactsModel.findByIdAndDelete(req.params.id);

        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAllContacts = async (req, res) => {
    try {
        await ContactsModel.deleteMany({});
        res.status(200).json({ message: "All contacts deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}