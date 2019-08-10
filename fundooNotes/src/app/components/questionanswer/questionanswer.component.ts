import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefreshService } from 'src/app/services/refresh.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-questionanswer',
  templateUrl: './questionanswer.component.html',
  styleUrls: ['./questionanswer.component.scss']
})
export class QuestionanswerComponent implements OnInit {

  constructor(private router:Router,private refreshService:RefreshService,private noteService:NoteService) { }

  questionarray : any[] = [];
  array: any[] = [];
  title:string;
  description:string;
  color :string;
  Property :boolean = false;
  like : boolean =false
  likeCount :any

  replyArray :any[]=[];

  editorForm = new   FormGroup({
    editorField : new FormControl()
  });

  ngOnInit() {
    this.refreshService.currentMessage.subscribe((data:any) =>{
      data.questionAndAnswerNotes.forEach((element:any)=>{
        this.questionarray.push(element);
        console.log('refresh service data in QA ',data);

        if(element.parentId){
          this.replyArray.push(element);
        }
        console.log(this.replyArray);

      });
        this.likeCount = this.questionarray[0].like.length;
        this.array.push(data);
        this.title =this.array[0].title;
        this.color = this.array[0].color;
        this.description = this.array[0].description; 
        console.log(this.title,this.description);        
    })
  }
  onClose(){
    var replyValue = this.editorForm.controls.editorField.value 
    console.log(replyValue);
    var data ={
      "message":replyValue,
    }
    this.noteService.postReply(data,this.questionarray[0].id).subscribe((res:any)=>{
      console.log(res);
    });
    this.router.navigateByUrl('dashboard');
  }

  onReply(){
    this.Property = !this.Property;
    console.log(this.editorForm.controls.editorField.value);
  }

  onLike(question){
    this.like = true;
    console.log(this.like);
    var id = question.id
    var data ={
      "like":true
  }
    this.noteService.postLike(data,id).subscribe((response:any)=>{
      // this.refreshService.changeMessage('fdjf');
      console.log(response);
});
  }

}
