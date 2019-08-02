import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-questionanswer',
  templateUrl: './questionanswer.component.html',
  styleUrls: ['./questionanswer.component.scss']
})
export class QuestionanswerComponent implements OnInit {

  constructor(private router:Router,private refreshService:RefreshService) { }

  questionarray : any[] = [];
  array: any[] = [];
  title:string;
  description:string;
  color :string;

  ngOnInit() {
    this.refreshService.currentMessage.subscribe((data:any) =>{

      data.questionAndAnswerNotes.forEach((element:any)=>{
        this.questionarray.push(element);
        console.log('refresh service data in QA ',this.questionarray);
      });
        this.array.push(data);
        this.title =this.array[0].title;
        this.color = this.array[0].color
        this.description = this.array[0].description; 
        console.log(this.title,this.description);
        
    })
  }
  onClose(){
    this.router.navigateByUrl('dashboard');
  }

}
