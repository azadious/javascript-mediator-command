import fetch from "node-fetch";
export default class UpdateMemberCard {
    execute() {
        console.log("execute update member");
        return fetch("http://localhost:3000/test")
            .then((response) => response.text())
            .then((data) => console.log(data));
    }
    rollback() {
        console.log("rollback update membber");
    }
}
