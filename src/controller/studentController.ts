import { Router, Request, Response } from 'express';
import studentManager from '../manager/studentManager';

const studentController = Router();

export let getStudents =(req : Request, res : Response) => {
    let gm = new studentManager();
    gm.getStudents(parseInt( req.params.id))
    .then(data => res.status(200).send(data))
    .catch(err=> res.status(500).send(err));
    
};

studentController.get('/:id', getStudents);

export default studentController;

// PUT
