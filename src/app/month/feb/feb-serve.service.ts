import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FebServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('February').add(value);
  }

  getBudget(){
    return this.firestores.collection('February').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('February/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('February/'+ ID).delete();
  }
}
