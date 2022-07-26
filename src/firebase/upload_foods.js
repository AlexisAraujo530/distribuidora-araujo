
const admin = require("firebase-admin");

const serviceAccount = require("./distriadmin.json");
const data = require("./productos.json");
const collectionKey = "listaProductos";



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const setting = {timestampsInSnapshots: true};
firestore.settings(setting);
if (data && (typeof data =="object")) {
  Object.keys(data).forEach(docKey => {
    firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then ((res) => {
      console.log("Document" + docKey + " successfully written!");
    }) .catch((error) => {
      console.error("Error writing document: ", error);
    });
  });
}