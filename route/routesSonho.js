const express = require('express');

const modelLivro = require('../model/modelSonhos');


const router = express.Router();


router.get('/', (req, res)=>{

    return res.status(200).json({status:'TESTE DE CONEXÃO COM A API!'});

});


router.post('/inserirSonho', (req, res)=>{

    let { sonho,valor, descricao } = req.body;

    modelLivro.create(
        {
            sonho,
            valor,
            descricao
        }
    )
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Sonho inserido com sucesso'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'Erro ao inserir o sonho',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE INSERÇÃO!'});

});


router.get('/listagemSonhos', (req, res)=>{

    modelSonho.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Sonhos listados com sucesso',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'Erro ao listar os sonhos',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE LISTAGEM!'});

});


router.get('/listagemSonhos/:id', (req, res)=>{

    let { id } = req.params;

    modelLivro.findByPk(id)
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Recuperado com sucesso',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'Erro ao recuperar',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE LISTAGEM COM BUSCA POR CÓDIGO !'});

});


router.delete('/excluirSonho/:id', (req, res)=>{

    let { id } = req.params;

    modelLivro.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'SONHO EXCLUIDO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO EXCLUIR',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE EXCLUSÃO!'});

});


router.put('/alterarSonho', (req, res)=>{

    let { id, sonho, valor, descricao } = req.body;

    modelSonhos.update(
        {
            sonho,
            valor,
            descricao
        },
        {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'ALTERADO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO ALTERAR',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE ALTERAÇÃO!'});

});

module.exports = router;