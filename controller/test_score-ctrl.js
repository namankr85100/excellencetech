const Model = require('../model/test_score')

createm = (req,res)=>{
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success:false,
            error:'you must provide a DATA',
        })
    }

    const model = new Model(body)
    
    if(!model){
        return res.status(400).json({success:false,error:err})
    }

model
.save()
.then(()=>{
    return res.status(201).json({
        success:true,
        id:model.id,
        message:'data created'
    })
})
.catch(error =>{
    return res.status(400).json({
        error,
        message:'data not created',
    })
})

}


updatem = async (req,res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success:false,
            error:'uou must provide a body to update',
        })
    }

    model.findOne({_id:req.parmas.id},(err,model)=>{
        if(err){
            return res.status(404).json({
                err,
                message:'data not found',
            })
        }

        model.name = body.name
        model.email = body.email
        model.address = body.address
        model
        .save()
        .then(()=>{
            return res.status(200).json({
                success:true,
                id:model._id,
                message:'data updated',
            })
        })
        .catch(error=>{
            return res.status(404).json({
                error,
                message:'data not updated',
            })
        })
    })

}

deletem = async (req,res)=>{
await model.findOneAndDelete({_id:req.parmas.id},(err,model)=>{
    if(err){
        return res.status(400).json({success:false,error:err})
    }

    if(!movie){
        return res
                .status(404)
                .json({success:false,error:'data not found'})
    }
    return res.status(200).json({success:true,date:model})
  
}).catch(err=>console.log(err))
}

getmodelbyid = async(req,res)=>{
    await model.findOne({_id:req.parmas.id},(err,model)=>{
        if(err){
            return res.status(400).json({success:false,error:err})

        }


        return res.status(200).json({success:true,data:model})
    }).catch(err=> console.log(err))
}



getmodels = async (req,res)=>{
    await model.find({},(err,model)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!model.length){
            return res
            .status(404)
            .json({success:false,error:'data not found'})
        }
        return res.status(200).json({success:true,data:model})
    }).catch(err=>console.log(err))
}

module.export={
    createm,
    updatem,
    deletem,
    getmodelbyid,
    getmodels
}