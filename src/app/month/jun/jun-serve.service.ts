import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JunServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('June').add(value);
  }

  getBudget(){
    return this.firestores.collection('June').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('June/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('June/'+ ID).delete();
  }
}
