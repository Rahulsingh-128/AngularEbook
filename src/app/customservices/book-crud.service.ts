import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../customclasses/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookCRUDService {
  url="http://localhost:5000"
  constructor(private http:HttpClient) {

   }
   addBook(book:Book):Observable<Book>{
     return this.http.post<Book>(this.url+"/addbookbyId",book)
   }

   getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.url+"/getAllbooks")
    
   }
   deleteBookById(id:number):Observable<Object>{
    return this.http.delete<Object>(this.url+"/deletebookbyId/"+id)

   }
   getBookById(id:number):Observable<Book[]>{
    return this.http.get<Book[]>(this.url+"/getAllBookbyId/"+id)
   }
   updateBook(book:Book):Observable<Object>{
    return this.http.put<Object>(this.url+"/updatebook/"+book.id,book)
   }
   getBooksByTitle(title:string):Observable<Book[]>{
    return this.http.get<Book[]>(this.url+"/getByTitle/"+title)
   }
   uploadBookPic(id:number,image_url:any):Observable<Object>{
    let formData=new FormData();
    formData.append('image_url',image_url)
    return this.http.put<Object>(this.url+"/upload/"+id,formData);
   }
}
