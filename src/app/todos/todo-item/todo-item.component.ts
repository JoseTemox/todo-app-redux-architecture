import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.models';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputTxt') fixedTxtInput: ElementRef;

  checkCompleted: FormControl;
  txtInput: FormControl;
  editing = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.checkCompleted.valueChanges.subscribe((value) => {
      this.todo.completed = value;
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editingFunction() {
    this.editing = true;

    this.txtInput.setValue(this.todo.text);

    setTimeout(() => {
      this.fixedTxtInput.nativeElement.select();
    }, 1);
  }

  endEditing() {
    this.editing = false;

    if (this.txtInput.invalid || this.txtInput.value === this.todo.text) return;
    this.store.dispatch(
      actions.edit({
        id: this.todo.id,
        text: this.txtInput.value,
      })
    );
  }

  delete() {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
  }
}
