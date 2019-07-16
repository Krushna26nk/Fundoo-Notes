import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Note } from 'src/app/modal/note';
import { UrlService } from 'src/app/services/url.service';
import { NoteService } from 'src/app/services/note.service';
import { MatDialog } from '@angular/material';
import { EditnotesComponent } from '../editnotes/editnotes.component';
import { RefreshService } from 'src/app/services/refresh.service';
import { SharedService } from 'src/app/services/shared.service';
import { Notelabel } from 'src/app/modal/notelabel';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  message: any;

  constructor(private urlService:UrlService,private noteService:NoteService,
              private refreshService:RefreshService, private dialog:MatDialog,private sharedService:SharedService) { }

  note: Note = new Note;
  noteLabel :Notelabel = new Notelabel();
  token =localStorage.getItem('token');
  open=false;
  showIcons = false;
  showIcon = true;
  newColor:any;
  noteId:any;
  isDeleted:boolean=false;
  isArchived:boolean=false;

  searchInput :string = this.sharedService.inputvalueArray;

  gettinghandle : boolean = this.sharedService.toggle;

  @Input() color :string;
  @Input() searchvalue :string;
  @Input() childMsg:boolean;


  @Output() event = new EventEmitter();


  cardArray = this.noteService.dataArray;
  sampleCardArray = this.noteService.noteArray;
  labelArrayList : any[] = this.noteService.labelArray
  labelDetails : any[] = this.noteService.labelDetails;
  emptyArray : any[] =[];

  
  /**
   * color input string array for color pallete
   */
  colors : string[] = [
    '#659DBD','#FC4445','#3FEEE6','#B1A296','#4E4E50','#AFD275','#EE4C7C','#D79922'
  ]

  public isSelected : string;

 
  card = new FormGroup({
    title : new FormControl(''),
    description : new FormControl('') 
  })

  titleValue =this.card.controls.title;
  descriptionValue =this.card.controls.description;

  value : string;
  inputhandle : boolean;

  addLabelToNote(label,items){
    var noteId = items.id;
    var labelId = label.id;

    var data ={
      "noteIdList":[noteId],
      "label":label.label
    }
    
    console.log(event);
    console.log(items);
    

    this.noteService.addNoteToLabel(items,label)

    console.log(noteId);
    console.log(labelId);
    
  }


  ngOnInit() {
    this.getHandle()
    
    console.log('label details',this.labelDetails);
    
    this.getNote();
    this.refreshService.currentMessage.subscribe(
      response=>{
        this.message=response
        //console.log(response);
        
        // this.getNote();
 
      }
    )
  }

  getHandle(){
    this.sharedService.change.subscribe(data =>{
      console.log('handle in notes',data);
      this.inputhandle = data;
      
    })
  }


  /**
   * @description onClose() method for displayinig the opening note animation  on click event
   */

            onClose(){
              
              if(this.titleValue == undefined || this.titleValue == null || this.descriptionValue == undefined || this.descriptionValue == null){
                this.showIcons = !this.showIcons;
                this.showIcon = !this.showIcon;
              }
              else if(this.color == undefined){
                this.note.color =''
              }
              else{
                this.note.color = this.color;
                this.urlService.addNote(this.note,this.token);
              }
            }



/**
 * 
 * @param color the color param get by the selected through the color palette.
 * @description to fetch the user selected colo by USING EB+VENT EMMITER...
 */

            changeColor(color){
            this.color = color;
            this.event.emit(this.color);
            }



  /**
   * @description onsubmit() method to add the particular note into the databses by checking is it empty or not.
   */


              onSubmit(){
                this.note = this.card.value;
                console.log(this.note);

                this.showIcons = !this.showIcons
                
                if(this.titleValue.value == undefined || this.titleValue.value == ''){
                  this.showIcons;
                  this.showIcon = !this.showIcon;
                  return false
                }
                else if( this.descriptionValue.value == undefined || this.descriptionValue.value == ''){
                  this.showIcons;
                  this.showIcon = !this.showIcon;
                  return false
                }
                else if(this.color == undefined){
                  this.note.color = '';
                }
                else{
                  this.note.color = this.color;
                  this.urlService.addNote(this.note,this.token);
                  this.refreshService.changeMessage('ghfg');
                }
              }




/**
 * @description to fetch all the note by using http services
 *   services : userservice and note service
 */
          getNote(){

            this.urlService.getNote(this.token)
            console.log(this.token);
            console.log('array fetch in note components');
            
            console.log('note array with trashed and archived notes',this.cardArray);
            console.log('without trashed and archived notes',this.sampleCardArray);
                       

            // this.cardArray.forEach(element=>{
            //   this.sampleCardArray.push(element);
            //   console.log('sample card array',this.sampleCardArray);
              
            // })
            

            // this.cardArray.forEach(element => {
            //   console.log('adfdas',element);
            //   this.sampleCardArray.push(element);
            // });            
          }
          




/**
 * @description trashNOte () method for the temparary deleting the notes and store it into the trash
 * @param noteid id of the particular norte stored while adding into the database.
 * @param userId id of the particular user which note is belongs to.
 */

        trashNote(items:any){
          // this.urlService.trashNote(userId,noteid);
          this.note.noteIdList = items.id;
          var data={
            "noteIdList":[this.note.noteIdList],
            "isDeleted":true
          }
          console.log(this.note.noteIdList);
         // console.log(userId);
          this.urlService.trashNote(data);
        }

// to update the color from color palette

        updateColor(items,$event){
          this.newColor = $event;
          console.log('color',$event);
          
          this.note.color = this.newColor;
          var data ={
            "color":this.newColor,
            "noteIdList":[items.id],
          }
          console.log('asds',data);
          
          this.urlService.updateColor(data);
        }



// to update the title and description using modal pop-up

        updateNote(items:any){
          let dialogref = this.dialog.open(EditnotesComponent,{
            height:'35vh',
            width:'56vw',
            data:{
              title:items.title,
              description:items.description,
              color:items.color,
              id:items.id
            }
          });
          console.log(items);
          dialogref.afterClosed().subscribe(result =>{
            console.log(`dialog close :${result}`);
            
          })
        }

        addlabel(){

        }


        onArchive(items:any){
          this.note.noteIdList = items.id;
          var data = {
            "noteIdList":[this.note.noteIdList],
            "isArchived":true
          }
          this.urlService.archiveNotes(data);
        }
 
        
        onRemoveLabel(labelId,noteId){
          console.log('label id',labelId,'note id',noteId);
          this.urlService.postRemoveLabel(labelId,noteId);
        }


}
