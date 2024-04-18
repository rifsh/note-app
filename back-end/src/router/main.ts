import express from 'express';
import {notesConstroller} from '../controller/mainController'


export const router = express.Router();

router.post('/notes-enter', notesConstroller.notesAdding)
router.get('/notes-view', notesConstroller.notesViewing)