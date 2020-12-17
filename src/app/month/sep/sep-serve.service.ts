import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SepServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('September').add(value);
  }

  getBudget(){
    return this.firestores.collection('September').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('September/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('September/'+ ID).delete();
  }
}
