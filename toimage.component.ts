import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-toimage',
  templateUrl: './toimage.component.html',
  styleUrls: ['./toimage.component.css']
})
export class ToimageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fullpage(){
    html2canvas(document.body).then(function(canvas)
    {
      var genratedImage = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
      window.location.href = genratedImage;
    });
  }
  content(){
    html2canvas(document.getElementById('contentToConvert')).then(function(canvas)
    {
      var genratedImage = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
      window.location.href = genratedImage;
    });
  }
}
