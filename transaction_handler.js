export default class TransactionHandler {
    commands_stack = [];

    execute(command, data) {
        this.commands_stack.push(command);
        command.execute(data);
    }

    rollback() {
        let command = this.commands_stack.pop();
        command.rollback();
    }

    getStack() {
        return this.commands_stack;
    }
}