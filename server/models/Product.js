import mongoose from "mongoose";
import {loadType} from "bob-mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);


/*
 */

const Productschema = new Schema({
   price: {
    type: mongoose.Types.Currency,
    currency: "EUR",
    get: (value) => value / 100,
   },
    expense: {
        type: mongoose.Types.Currency,
        currency: "EUR",
        get: (value) => value / 100,
    },
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
    }],
    
}, {timestamps: true, toJSON: {getters: true}});


const Product = mongoose.model("Product", Productschema);
export default Product;