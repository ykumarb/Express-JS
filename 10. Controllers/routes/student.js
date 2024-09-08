import express from 'express';
import { 
    allStudents, 
    newStudent, 
    updateStudent, 
    removeStudent 
} from '../controllers/student.js';

const router = express.Router();

router.get('/all', allStudents);

router.post('/post', newStudent);

router.put('/put', updateStudent); 

router.delete('/delete', removeStudent);

export default router;