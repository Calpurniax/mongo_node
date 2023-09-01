import FormLock from "../model/FormModel.js";

//Crud (crear, leer, actulizar, borrar)

//crear

export const createForm = async (req, res) =>{
    console.log (req.body)
    const {Email, Name, Subject, Message} = req.body
    if (!Email || !Name || !Subject || !Message ){
        return res.status(400).json ({message: "Todos los campos son requeridos."})
    }
    try {
        const form = await FormLock.create(req.body)
        res.status(201).json(form)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

//traer un formulario con su id
export const getFormid = async (req,res) =>{
    try {
        const id = req.params.id 
        const form =await FormLock.findById(id)
        res.status(200).json(form)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//todos los formularios.
export const getForms = async (req,res) =>{
    try {
        const form =await FormLock.find()
        res.status(200).json(form)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//Actualizar el formulario.
export const updateForm = async (req, res) => {
    const {Email, Name, Subject, Message} = req.body

    if(!Email && !Name && !Subject && !Message ) {
        return res.status(400).json({ message: "Debe proporcionar al menos un campo para actualizar." });
    }
    try {
        const id = req.params.id
        const form = await FormLock.findByIdAndUpdate({_id: id}, req.body, {new:true});
        if (!form){
            return res.status(404).json({ message: "No se encontró el fromulario con el id especificado." });
        }
        res.status(200).json(form);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//borrar
export const deleteform = async (req, res) =>{
    try {
        const id = req.params.id
        const form = await FormLock.deleteOne({_id: id});
         if (!form){
            res.status(404).json({ message: "No se encontró el fromulario con el id especificado." });
         }
         res.status(200).json({ message: "¡Formulario se ha eliminado correctamente!" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}