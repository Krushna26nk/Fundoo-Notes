import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';
import { MatDialogRef } from '@angular/material';
import { FormBuilder,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.scss']
})
export class UploadimageComponent implements OnInit {
  file:File;
  filename:any;
  token:any;
  constructor(private urlService:UrlService,private dialogRef:MatDialogRef<UploadimageComponent>,
              private formBuilder:FormBuilder) { }

  profileForm:FormGroup;
  ngOnInit() {
    this.profileForm=this.formBuilder.group(
      {
        profile:[""]
      }
    )
  }

  onimageChange(event){
    console.log(event);
    this.file =<File>event.target.files[0];
    //var filename =<File>event.target.files[0].name;
    console.log("file details",this.file);
    //console.log(filename);
  
  }
  onSubmit(){
    //var file =<File> event.target.files;
    // var filename =<File> file[0].name;
    console.log("file dddddddd",this.file)
    
    
    const formData = new FormData();

    formData.append("file",this.file)
    //this.token = localStorage.getItem('token');
    
    this.urlService.uploadProfile(formData);
    this.dialogRef.close();
  }

}
