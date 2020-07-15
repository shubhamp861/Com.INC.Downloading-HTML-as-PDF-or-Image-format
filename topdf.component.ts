import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-topdf',
  templateUrl: './topdf.component.html',
  styleUrls: ['./topdf.component.css']
})
export class TopdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fullpage()
  {
    html2canvas(document.body).then
    (
      canvas =>
      {
        var imgWidth =200;
        var pageHeight=295;
        var imgHeight = canvas.height * imgWidth/canvas.width;
        var heightLeft = imgHeight;
        
        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jspdf('p','mm','a4');
        var position =0;
        pdf.addImage(contentDataURL,'PNG',0,position,imgWidth,imgHeight);
        pdf.save('File.pdf');
      }
    )
  }
  content()
  {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then
    (
      canvas =>
      {
        var imgWidth =200;
        var pageHeight=295;
        var imgHeight = canvas.height * imgWidth/canvas.width;
        var heightLeft = imgHeight;
        
        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jspdf('p','mm','a4');
        var position =0;
        pdf.addImage(contentDataURL,'PNG',0,position,imgWidth,imgHeight);
        pdf.save('File.pdf');
      }
    )

  }

}
