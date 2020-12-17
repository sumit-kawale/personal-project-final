import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JanServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('January').add(value);
  }

  getBudget(){
    return this.firestores.collection('January').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('January/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('January/'+ ID).delete();
  }
}
