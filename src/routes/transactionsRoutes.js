import {Router} from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";
import { UpdateTransaction } from "../schemas/validation/UpdateTransaction.js";
import { DeleteTransaction } from "../schemas/validation/DeleteTransaction.js";


const transactionRouter = Router();

transactionRouter.use(authMiddleware)

transactionRouter.post('/transactions', validationSchemaMiddleware(CreateTransaction), transactionController.create);

transactionRouter.patch('/transactions', validationSchemaMiddleware(UpdateTransaction), transactionController.updateTransactionById);

transactionRouter.delete('/transactions', validationSchemaMiddleware(DeleteTransaction), transactionController.deleteTransactionById);

transactionRouter.get('/transactions', transactionController.findAllByUser);

export default transactionRouter;