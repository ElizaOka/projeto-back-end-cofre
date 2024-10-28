const express = require('express');
const modelSonho = require('../model/modelSonho');
const router = express.Router();


router.get('/', (req, res)=>{

    return res.status(200).json({status:'TESTE DE CONEXÃO COM A API!'});

});

router.post('/inserirSonho', (req, res)=>{

    let { cod_categoria, nome_sonho, valor_sonho, descricao_sonho } = req.body;

    modelSonho.create(
        {

            cod_categoria,
            nome_sonho,
            valor_sonho,
            descricao_sonho
        }
    )
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Sonho cadastrado com sucesso'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'Houve um erro ao inserir',
                errorObject:error
            }
        );
    });

   
});


router.get('/listarSonho', (req, res)=>{

    modelSonho.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Sonhos listados',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'houve erro ao listar',
                errorObject:error
            }
        );
    });


});


router.get('/listarSonho/:cod_sonho', (req, res)=>{

    let { cod_sonho } = req.params;

    modelSonho.findByPk(cod_sonho)
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Sonho recuperado',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'Erro ao recuperar o sonho',
                errorObject:error
            }
        );
    });

   

});


router.delete('/excluirSonho/:cod_sonho', (req, res)=>{

    let { cod_sonho } = req.params;

    modelSonho.destroy(
        {where:{cod_sonho}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Sonho deletado'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'Erro ao deletar',
                errorObject:error
            }
        );
    });


});


router.put('/alterarSonho', (req, res)=>{

    let { cod_sonho, nome_sonho, valor_sonho, descricao_sonho } = req.body;

    modelSonho.update(
        {
            nome_sonho,
            valor_sonho,
            descricao_sonho
        },
        {where:{cod_sonho}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Sonho alterado'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'erro ao alterar',
                errorObject:error
            }
        );
    });



});

module.exports = router;