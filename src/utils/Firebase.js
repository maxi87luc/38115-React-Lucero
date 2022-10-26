import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc} from "firebase/firestore";

const db = ()=> getFirestore()


export function getCollection(name="") {
    const data = collection(db(),name)
    return getDocs(data)
}

export function getSingleDoc(collection="", id="") {
    const data = doc(db(), collection, id)
    return getDoc(data)
}

export function updateCurva(collection="", id="", mod) {
    const data = doc(db(), collection, id)
    console.log(data)
    return updateDoc(data, {curva: mod})
}



export function filterCollection(name="",condition=["","","","","","",""]) {
    const data = query(collection(db(), name),where(condition[0],condition[1],condition[2]), where(condition[3], condition[4], condition[5]))
    return getDocs(data)
}


export function addSingleDoc(order, coleccion) {
    const data = collection(db(), coleccion)
  
    return addDoc(data, order)
}