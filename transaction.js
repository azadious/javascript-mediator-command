import CreateTransactionWithMemberCard from "./events_handler/create_transaction_with_member_card.js";

export default class Transaction {
    dispatch(event_type, data) {
        new event_type(data);
    }
}
