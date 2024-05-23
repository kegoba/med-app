const ownerInstance = require("../models/owner.model")




const createOwner = async (req, res)=>{
    try{
        const data = new ownerInstance(req.body)
        const ownerInfor = await data.save()
        res.json(ownerInfor)
    } catch(err){
        res.status(400).js({data :  err.message})
    }

}

const getAllOwner = async (req, res)=>{
    try {
        const ownerInfor = await ownerInstance.find()
        res.json(ownerInfor)
    } catch(err){
        res.status(400).json({data:err})
    }
    
}

const updateOwner = async (req, res)=>{
    try {
        const data = await ownerInstance.findByIdAndUpdate(
            req.params.id,
             req.body,({
                new : true
             }))
        res.json(data)

    }catch(err){
        res.status(400).json({data : err})

    }
    
}


const deleteOwner = async (req, res)=>{
    try {
        const data =await ownerInstance.findByIdAndDelete(req.params.id)
        res.json(data)
    }catch(err){
        res.status(400).json({data:err.message})
    }
    
}





module.exports = {
    createOwner,
    getAllOwner,
    updateOwner,
    deleteOwner
}