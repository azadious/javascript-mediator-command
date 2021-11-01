import Transaction from "./transaction.js";
import express from "express";
import CreateTransactionWithMemberCard from "./events_handler/create_transaction_with_member_card.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    let transaction = new Transaction();
    transaction.dispatch(
        CreateTransactionWithMemberCard,
        { data: { member: { id: "001" } },
    });
    res.send({ result: "OK" });
});

app.get("/test", (req, res) => {
    res.send({ result: "OK" });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
