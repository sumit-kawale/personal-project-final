import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DecServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('December').add(value);
  }

  getBudget(){
    return this.firestores.collection('December').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('December/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('December/'+ ID).delete();
  }
}
