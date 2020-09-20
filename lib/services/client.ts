import { firebaseClient } from "../firebaseClient";
import { docRefToArray } from "../firebaseHelpers";

interface Client {
  id: string;
  name: string;
  description: string;
}

export async function getClients() {
  return firebaseClient
    .firestore()
    .collection("clients")
    .get()
    .then((ref) => {
      return docRefToArray<Client>(ref);
    });
}
