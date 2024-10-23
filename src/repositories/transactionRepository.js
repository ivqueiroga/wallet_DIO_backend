import TransactionSchema from '../schemas/Transaction.js';

async function create(data) {
  return TransactionSchema.create(data);
};

async function findAllByUser(id) {
  return await TransactionSchema.find({userId: id});
}

async function updateTransactionById(data, id) {
  return await TransactionSchema.findByIdAndUpdate({_id: id}, data);
}

async function deleteTransactionById(id) {
  return await TransactionSchema.deleteOne({ _id: id });
}

 export default {
  create,
  findAllByUser,
  updateTransactionById,
  deleteTransactionById
};