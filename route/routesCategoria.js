const express = require('express');
const modelCategoria = require('../model/modelCategoria');
const router = express.Router();


router.post('/inserirCategoria', (req, res)=>{

    let { nome_categoria} = req.body;

    modelCategoria.create(
        {
            nome_categoria,
        }
    )
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CATEGORIA INSERIDA COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO INSERIR A CATEGORIA',
                errorObject:error
            }
        );
    });

});

router.get('/listagemCategorias', (req, res)=>{

    modelCategoria.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CATEGORIAS LISTADAS COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO LISTAR AS CATEGORIAS',
                errorObject:error
            }
        );
    });


});

router.get('/listagemCategorias/:cod_categoria', (req, res)=>{

    let { cod_categoria } = req.params;

    modelCategoria.findByPk(cod_categoria)
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CATEGORIA RECUPERADA COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO RECUPERAR A CATEGORIA',
                errorObject:error
            }
        );
    });

});


router.delete('/excluirCategoria/:cod_categoria', (req, res)=>{

    let { cod_categoria } = req.params;

    modelCategoria.destroy(
        {where:{cod_categoria}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CATEGORIA EXCLUIDO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO EXCLUIR A CATEGORIA',
                errorObject:error
            }
        );
    });

});

router.put('/alterarCategoria', (req, res)=>{

    let { cod_categoria, nome_categoria } = req.body;

    modelCategoria.update(
        {
            nome_categoria
        },
        {where:{cod_categoria}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CATEGORIA ALTERADA COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO ALTERAR A CATEGORIA',
                errorObject:error
            }
        );
    });

});

module.exports = router;