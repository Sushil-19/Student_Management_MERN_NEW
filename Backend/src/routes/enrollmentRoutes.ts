
import { Router } from 'express';
import { createEnrollment, getEnrollments, getEnrollmentById, updateEnrollment, deleteEnrollment } from '../controller/enrollmentController';

const router = Router();

router.post('/enrollments', createEnrollment);
router.get('/enrollments', getEnrollments);
router.get('/enrollments/:id', getEnrollmentById);
router.put('/enrollments/:id', updateEnrollment);
router.delete('/enrollments/:id', deleteEnrollment);

export default router;
