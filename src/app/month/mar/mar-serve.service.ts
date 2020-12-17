import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MarServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('March').add(value);
  }

  getBudget(){
    return this.firestores.collection('March').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('March/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('March/'+ ID).delete();
  }
}
