import { createAction } from '@ngrx/store';

export const increment = createAction('Counter Increment');
export const decrement = createAction('Counter Decrement');
export const reset = createAction('Counter Reset');
export const incrementByAmount = createAction('Counter Increment By User Amount',(amount:number=0)=>({amount}));