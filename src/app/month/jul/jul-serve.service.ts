import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JulServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('July').add(value);
  }

  getBudget(){
    return this.firestores.collection('July').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('July/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('July/'+ ID).delete();
  }
}
