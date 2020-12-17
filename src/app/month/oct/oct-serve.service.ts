import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OctServeService {

  constructor(
    public firestores: AngularFirestore
  ) { }
  addBudget(value){
    return this.firestores.collection('October').add(value);
  }

  getBudget(){
    return this.firestores.collection('October').snapshotChanges();
  }

  editBudget(ID, Data){
    this.firestores.doc('October/'+ID).update(Data);
  }

  deleteBudget(ID){
    this.firestores.doc('October/'+ ID).delete();
  }
}
