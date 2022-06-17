import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const testUsuario = (req, res) => {
  res.json("Testando a rota de Usuario");
};

const getAllUsuarios = async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  return res.json(usuarios);
};

const createUsuario = async (req, res) => {

// chave         =  valor do campo   

  const { nome } = req.body;
    try {
    console.log('cheguei');
    const usuario = await prisma.usuario.create({
      data: { nome },
    });
    return res.status(201).json(usuario);
  } catch (error) {
    return res.json(error.message).status(400);
  }
};

const getUsuarioById = async (req, res) => {
  try{
  const { id } = req.params;
  console.log(id);
  const usuario = await prisma.usuario.findUnique({ where: { idusuario: Number(id), }});
  return res.json(usuario);
}
catch(error){
  return res.json(error.message).status(400);
}
};

const updateUsuario = async (req, res) => {

const {id} = req.params;
const {nome} = req.body;

  try {
    const usuario = await prisma.usuario.update({where: {idusuario: Number(id)}, data: {nome: nome}});
    return res.json(usuario).status(200);

  } catch (error) {
    return res.json(error.message).status(400);
  }
}

export { testUsuario, getAllUsuarios, createUsuario, getUsuarioById,  updateUsuario };
