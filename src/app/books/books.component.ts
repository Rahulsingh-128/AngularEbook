import { Component, OnInit  } from '@angular/core';
import { Book } from '../customclasses/book';
import { BookCRUDService } from '../customservices/book-crud.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books:Book[]=[]
  allbooks:Book[]=[];
  errorMessage="";
  constructor(private bookcrud:BookCRUDService){
  }
  ngOnInit(): void {  
      this.getBooks();
  }
  getBooks(){
    const obs=this.bookcrud.getAllBooks();
    obs.subscribe({
      next:(book)=>{
        console.log(book);
        this.books=book;
        this.allbooks=book;
      },
      error: (err)=>{
        console.log(err); 
        window.alert("something went wrong getting books...")
      }
    });
  }
    deleteBook(id:number){
      const ans=confirm("Do you really want to delete?")
      if(ans){
        const obs=this.bookcrud.deleteBookById(id);
        obs.subscribe({
          next:(obj)=>{
            console.log(obj);
            window.alert("Book deleted successfully....");
            this.getBooks();
          },
          error: (err)=>{
            console.log(err); 
            window.alert("something went wrong deleting employee...")
          }
        });
      }

    }
    searchBook(title:string){
      if(title!==''){
      const obs=this.bookcrud.getBooksByTitle(title);
      obs.subscribe({
        next:(book)=>{
          if(book.length>0){
          this.errorMessage="";
          this.books=book;
          }
        else
        this.errorMessage = "Not Found";
        },
        error: (err)=>{
          console.log(err); 
          window.alert("something went wrong searching books...")
        }
      });
     }
     else{
      this.errorMessage="";
      this.books=this.allbooks;
     }
    }
  }

