import CreateTransactionWithMemberCard from "./events_handler/create_transaction_with_member_card.js";

export default class Transaction {
    dispatch(type, data) {
        if (type == "CreateTransactionWithMemberCard") {
            let event = new CreateTransactionWithMemberCard(this.transaction, data);
        }
    }
}
