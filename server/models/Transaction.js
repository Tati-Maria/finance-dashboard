import mongoose from "mongoose";
import {loadType} from "bob-mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);


/*
 */

const Transactionchema = new Schema({
   buyer: {
    type: mongoose.Types.Currency,
    currency: "EUR",
    get: (value) => value / 100,
   },
    amount: {
        type: mongoose.Types.Currency,
        currency: "EUR",
        get: (value) => value / 100,
    },
    productIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    
}, {timestamps: true, toJSON: {getters: true}});


const Transaction = mongoose.model("Transaction", Transactionchema);
export default Transaction;