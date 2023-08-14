import { redirect } from "react-router-dom";
import { createContact, getContact, getContacts, updateContact, deleteContact } from "../data/contacts";

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function contactLoader({ params }) {
    const contact = await getContact(params.contactId);
    if (!contact) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found"
        })
    }
    return { contact };
}

export async function editContactAction({ request, params }) {
    const formData = await request.formData()
    const updates = Object.fromEntries(formData)
    await updateContact(params.contactId, updates)
    return redirect(`/contacts/${params.contactId}`)
}

export async function editContactFavoriteAction({ request, params }) {
    let formData = await request.formData();
    return updateContact(params.contactId, {
        favorite: formData.get("favorite") === "true",
    });
}

export async function deleteContactAction({ params }) {
    const success = await deleteContact(params.contactId)
    console.log(success)
    return success ? redirect(`/`) : redirect(`/contacts/${params.contactId}`)
}

export async function rootLoader({ request }) {
    const url = new URL(request.url)
    const q = url.searchParams.get("q")
    const contacts = await getContacts(q)
    return { contacts, q }
}