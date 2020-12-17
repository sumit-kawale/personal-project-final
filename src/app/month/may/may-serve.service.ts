import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MayServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('May').add(value);
  }

  getBudget(){
    return this.firestores.collection('May').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('May/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('May/'+ ID).delete();
  }
}
