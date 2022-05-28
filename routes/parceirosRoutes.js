const router = require('express').Router()

const Parceiros = require ('../models/Parceiros')


// crianção de parceiros

router.post('/', async (req,res) => {

    console.log(req)
    const {tradingName,ownerName,document, coverageArea, address} = req.body
    console.log(tradingName)

    //validação usario existente com mesmo documento
    const foundParceiro = await Parceiros.findOne({document})
    console.log(foundParceiro)
    if(foundParceiro) {
        return res.status(400).json({message: 'Usuario com esse documento, já existe cadastrado!'})
    }
    
    const parceiros = {
        tradingName,
        ownerName,
        document,
        coverageArea,
        address
    }

    try{
        await Parceiros.create(parceiros)
        
        res.status(201).json({message : 'Parceiro criado com sucesso!'})

    }catch (error){
        res.status(500).json({ error: error})
    }
})

router.get('/:id', async (req, res) => {

    const {id} = req.params

    try{
        const parceiros =  await Parceiros.findOne({_id: id})

        if(!parceiros){
            res.status(422).json({message: 'O parceiro não foi encontrado'})
            return
        } 

        res.status(200).json(parceiros)

    }catch (error) {
        res.status(500).json({ error: error})
    }

})

module.exports =  router