import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NovServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('November').add(value);
  }

  getBudget(){
    return this.firestores.collection('November').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('November/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('November/'+ ID).delete();
  }
}
