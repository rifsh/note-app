import { notesModel } from "../schema/notes-schema"

const notesEnteringsrvc = async (values: { title: string, description: string, color: string }) => {
    try {
        if (!values || !values.title || !values.description) {
            return false
        } else {
            const notesAdding = await notesModel.create({ title: values.title, desciption: values.description, color: values.color });
            return true;
        }
    } catch (error) {
        console.log(error);

    }

}

const notesViewwingsrvc = async () => {
    try {   
        const notes = await notesModel.find()
        return notes;    
    } catch (error) {
        console.log(error);

    }

}

export const mainSrvc = {
    notesEnteringsrvc,
    notesViewwingsrvc
}