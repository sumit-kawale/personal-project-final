import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AprServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('April').add(value);
  }

  getBudget(){
    return this.firestores.collection('April').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('April/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('April/'+ ID).delete();
  }
}
