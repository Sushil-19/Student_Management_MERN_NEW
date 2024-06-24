
import { Request, Response } from 'express';
import Enrollment from '../models/Enrollment';

export const createEnrollment = async (req: Request, res: Response): Promise<void> => {
  try {
    const enrollment = new Enrollment(req.body);
    const savedEnrollment = await enrollment.save();
    res.status(201).json(savedEnrollment);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getEnrollments = async (req: Request, res: Response): Promise<void> => {
  try {
    const enrollments = await Enrollment.find().populate('student course');
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getEnrollmentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const enrollment = await Enrollment.findById(req.params.id).populate('student course');
    if (enrollment) {
      res.status(200).json(enrollment);
    } else {
      res.status(404).json({ message: 'Enrollment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const updateEnrollment = async (req: Request, res: Response): Promise<void> => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('student course');
    if (enrollment) {
      res.status(200).json(enrollment);
    } else {
      res.status(404).json({ message: 'Enrollment not found' });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteEnrollment = async (req: Request, res: Response): Promise<void> => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (enrollment) {
      res.status(200).json({ message: 'Enrollment deleted' });
    } else {
      res.status(404).json({ message: 'Enrollment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
