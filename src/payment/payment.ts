var express = require('express');
const app = express();
// Stripe avec la clé personnelle recupéré sur dans notre compte stripe
const stripe = require('stripe')('pk_test_51I7lKNIv8M2rIeHBeikfbmDOxLAg5WM8ormFqiyRcHjmNQv8220LnPLi1UhCC5U7hSb1VCmiBTctwpEvodTcnERY002XUqAtjJ');




export const carte = function () {

    const param = {
    card :{
        number: '142627972652673',
        exp_month: 10,
        exp_year:2026,
        cvc:'573',
        default:'non'
    }
    }

    stripe.tokens.create(param, function (err: string,token: { card: { exp_month: any; }; }) {
       
        if(token)
        {
            console.log(token.card.exp_month);
            console.log("success: "+JSON.stringify(token, null, 2));
        }else{
            console.log("")
        }
    })
}




