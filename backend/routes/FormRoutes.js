import express from 'express';
import { createForm, deleteform, updateForm, getForms, getFormid } from '../controller/FormController.js';

const FormRouter = express.Router();

FormRouter.get('/', getForms)
FormRouter.get('/:id',getFormid )
FormRouter.post ('/', createForm )
FormRouter.put ('/:id', updateForm )
FormRouter.delete ('/:id', deleteform)

export default FormRouter