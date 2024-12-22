import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './store/counter/counter.selectors';
import { decrement, increment, reset } from './store/counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

     nombre!:number

     store=inject(Store);

    ngOnInit(): void {
      this.store.select(selectCount).subscribe({
        next:(data)=>{
          this.nombre=data
        }
      })
    }

     inc(){
       this.store.dispatch(increment())
     }

     dec(){
      this.store.dispatch(decrement())  
     }

     reset(){
        this.store.dispatch(reset())
     }
}
