import { NextFunction, Request, Response } from "express"
import { mainSrvc } from '../services/main-servc'


const notesAdding = async (req: Request, res: Response, next: NextFunction) => {
    const notesValues: { title: string, description: string, color: string } = req.body;
    const data = await mainSrvc.notesEnteringsrvc(notesValues);
    if (data) {
        res.status(200).json({
            message:'succcess',
            data
        })
    }else {
        res.status(302).json({
            message:'something wrong'
        })
    }
}

const notesViewing = async (req: Request, res: Response, next: NextFunction) => {
    const data = await mainSrvc.notesViewwingsrvc();
    if (data) {
        res.status(200).json({
            message:'succcess',
            data
        })
    }else {
        res.status(404).json({
            message:'something wrong'
        })
    }
}

export const notesConstroller = {
    notesAdding,
    notesViewing
}