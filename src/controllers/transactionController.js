import transactionService from "../service/transactionService.js";

async function create(req, res) {
  const body = req.body;
  const {_id: id} = res.locals.user

  try {

    const transaction = await transactionService.create(body, id);
    return res.status(201).send(transaction);

  } catch (err) {
    return res.status(409).send(err.message)
  }
}

async function findAllByUser(req, res) {
  const {_id: id} = res.locals.user;
  try {
    const transactions = await transactionService.findAllByUser(id)
    return res.send(transactions);
  }catch (err) {
    return res.status(500).send(err.message);
  }
}

async function updateTransactionById(req, res) {
  const body = req.body;
  const {_id: id} = body;

  try {
    const transaction = await transactionService.updateTransactionById(body, id)
    return res.send(transaction);
  }catch (err) {
    return res.status(404).send(err.message);
  }
}

async function deleteTransactionById(req, res) {
  const {_id} = req.body;

  try {
    const transaction = await transactionService.deleteTransactionById({_id})
    if (transaction.deletedCount === 0) {
      return res.status(404).send("Transaction not found or already deleted.");
    }
    return res.send({ message: "Transaction deleted successfully" });
  }catch (err) {
    return res.status(500).send(err.message);
  }
}



export default {
  create,
  findAllByUser,
  updateTransactionById,
  deleteTransactionById
}