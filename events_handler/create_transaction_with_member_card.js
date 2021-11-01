import TransactionHandler from "../transaction_handler.js";
import GenerateId from "../services/journal/generate_id.js";
import AddJournal from "../services/journal/add_new_journal.js";
import UpdateInventory from "../services/inventory/update_inventory.js";
import UpdatePromotion from "../services/promotion/update_promotion.js";
import UpdateMemberCard from "../services/membercard/update_membercard.js";

export default class CreateTransactionWithMemberCard {
    constructor(data) {
        console.log("start create transaction with member card");
		
        let transaction = new TransactionHandler();
        try {
            transaction.execute(new GenerateId(data));
            transaction.execute(new AddJournal(data));
            transaction.execute(new UpdateInventory(data));
            transaction.execute(new UpdatePromotion(data));
            transaction.execute(new UpdateMemberCard(data));
        } catch (error) {
            let rollback_transactions = transaction.getStack();
            rollback_transactions.forEach(element => {
                element.rollback();
            });
        }

        console.log("end create transaction with member card");
    }
}
