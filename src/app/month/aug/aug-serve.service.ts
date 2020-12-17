import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AugServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('August').add(value);
  }

  getBudget(){
    return this.firestores.collection('August').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('August/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('August/'+ ID).delete();
  }
}
