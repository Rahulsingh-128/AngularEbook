import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../customclasses/book';
import { ActivatedRoute ,Router} from '@angular/router';
import { BookCRUDService } from '../customservices/book-crud.service';

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrl: './book-input.component.css'
})
export class BookInputComponent {
  bookForm:FormGroup;
  route:string|undefined="";
  book=new Book();

  constructor(private activeRoute:ActivatedRoute,private bookCRUD:BookCRUDService,private router:Router){
    // console.log("activeRoute",activeRoute);
    this.route=activeRoute.snapshot.routeConfig?.path;
    const routeParam=this.activeRoute.snapshot.paramMap.get('id');
    if(routeParam!=null){
      let id=parseInt(routeParam);
      this.getBook(id);
    }

    this.bookForm=new FormGroup({
      id:new FormControl(this.setInitialValue(),Validators.required),
      title:new FormControl(this.book.title,[Validators.required,Validators.maxLength(50),Validators.minLength(3)]),
      author:new FormControl(this.book.author,[Validators.required]),
      price:new FormControl(this.book.price,[Validators.required]),
      image_url:new FormControl(),
    });
  }
  setInitialValue():number{
    if(this.route?.includes("editBook"))
      return this.book.id
    else
      return Math.round(Math.random()*100); // counter store increment id set
  }
  get id(){
    return this.bookForm.get('id');
  }
  get title(){
    return this.bookForm.get('title');
  }
  get author(){
    return this.bookForm.get('author');
  }
  get price(){
    return this.bookForm.get('price');
  }
  get image_url(){
    return this.bookForm.get('image_url');
  }
  collectData(){
    this.book=this.bookForm.value;
    if(this.route?.includes('add'))
      this.addBook();
    else
      this.updateBook();
  }
  addBook(){
    const obs=this.bookCRUD.addBook(this.book);
    obs.subscribe({
      next:(book:any)=>{console.log(book);
         window.alert(`Book with id ${book.insertId} added successfully....`)
         this.router.navigate(["/showBook"])
      },
      error: (err)=>{console.log(err);
      window.alert("something wrong while adding...")
      }
    });
  }
  updateBook(){
    const obs=this.bookCRUD.updateBook(this.book);
    obs.subscribe({
      next:(obj)=>{
        window.alert(`Book with id ${this.book.id} updated successfully....`)
        this.router.navigate(['/showBook']);
      },
      error: (err)=>{
        console.log(err); 
        window.alert("something went wrong while updating...")
      }
    });

  }
  getBook(id:number){
    const obs=this.bookCRUD.getBookById(id);
    obs.subscribe({
      next:(books)=>{
        console.log("by id",books);
        this.bookForm.patchValue(books[0]);
      },
      error:(err)=>{
        console.log(err);
        window.alert("something went wrong...")
      }
    });

  }
  test(){
    console.log("in test",this.title?.errors);
    
  }
}
