import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id) {
  if(!id) throw new Error("User id is required");

  return await transactionRepository.create({...body, userId: id})
}

async function findAllByUser(id) {
  if(!id) throw new Error("User id is required");
  return await transactionRepository.findAllByUser(id);
}

async function updateTransactionById(body, id) {
  if(!id) throw new Error("Transaction is required");
  return await transactionRepository.updateTransactionById(body, id);
}

async function deleteTransactionById(id) {
  if(!id) throw new Error("Transaction is required");
  return await transactionRepository.deleteTransactionById(id);
}

export default {
  create,
  findAllByUser,
  updateTransactionById,
  deleteTransactionById
}