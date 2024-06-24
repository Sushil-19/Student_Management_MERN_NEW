
import { Router } from 'express';
import { createStudent, getStudents, getStudentById, updateStudent, deleteStudent } from '../controller/studentController';

const router = Router();

router.post('/students', createStudent);
router.get('/students', getStudents);
router.get('/students/:id', getStudentById);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

export default router;
