import { Component, OnInit } from '@angular/core';
import { Restapi_auditScan_Service } from '../restapi_auditScan_Service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import * as CanvasJS from './canvasjs.min.js';

export interface AuditScanData {
  userName: String;
  projectName: String;
  selectScanOption: number;
  selectTagOption: number;
  pageDepth: number;
  pageUrl: String;
  txtPageURL: String;
  selectBrowser: number; 
  isAuthenticated:boolean;
 uploadFilePath:String; 
}




export interface ApplicationToFeature {
  applicationId: number;
  featureId: number;
  featureName: String;
  servicePath: String;
  featureSequence: number;


}


@Component({
  selector: 'app-auditscan',
  templateUrl: './auditscan.component.html',
  styleUrls: ['./auditscan.component.css']
})
export class AuditscanComponent implements OnInit {

  formatLabel(value: number) {


    return value;
  }


  listStatus =[
    {name:'Chrome',value:1,checked:true},
    {name:'Mozilla',value:0,checked:false},
    {name:'IE',value:0,checked:false}
  ];


  form2: FormGroup;
  error: string;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };
  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;

  userName: String;
  appdata: any;
  form: any = {};
  uploadPath:any;
  requestMapId:any;
  constructor(private service: Restapi_auditScan_Service, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(){


    CanvasJS.addColorSet("greenShades",
                [

                "#00be9a"              
                ]);

    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: false,
      colorSet: "greenShades",
      title: {
        text: ""
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "" },
          { y: 55, label: "" },
          { y: 50, label: "" },
          { y: 65, label: "" },
          { y: 95, label: "" },
          { y: 68, label: "" },
          { y: 28, label: "" },
          { y: 34, label: "" },
          { y: 14, label: "" },
          { y: 65, label: "" },
          { y: 95, label: "" },
          { y: 68, label: "" },
          { y: 55, label: "" },
          { y: 50, label: "" },
          { y: 50, label: "" },
          { y: 65, label: "" },
          { y: 95, label: "" },
          { y: 68, label: "" },
          { y: 28, label: "" },
        ]
      }]
    });
      
    chart.render();





    
    var chart2 = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      title:{
          text: "Google - Consolidated Quarterly Revenue",
          fontFamily: "arial black",
          fontColor: "#695A42"
      },
      axisX: {
          interval: 1,
          intervalType: "year"
      },
      axisY:{
          valueFormatString:"$#0bn",
          gridColor: "#B6B1A8",
          tickColor: "#B6B1A8"
      },
      toolTip: {
          shared: true,
          content: toolTipContent
      },
      data: [{
          type: "stackedColumn",
          showInLegend: true,
          color: "#696661",
          name: "Q1",
          dataPoints: [
              { y: 6.75, x: new Date(2010,0) },
              { y: 8.57, x: new Date(2011,0) },
              { y: 10.64, x: new Date(2012,0) },
              { y: 13.97, x: new Date(2013,0) },
              { y: 15.42, x: new Date(2014,0) },
              { y: 17.26, x: new Date(2015,0) },
              { y: 20.26, x: new Date(2016,0) }
          ]
          },
          {        
              type: "stackedColumn",
              showInLegend: true,
              name: "Q2",
              color: "#EDCA93",
              dataPoints: [
                  { y: 6.82, x: new Date(2010,0) },
                  { y: 9.02, x: new Date(2011,0) },
                  { y: 11.80, x: new Date(2012,0) },
                  { y: 14.11, x: new Date(2013,0) },
                  { y: 15.96, x: new Date(2014,0) },
                  { y: 17.73, x: new Date(2015,0) },
                  { y: 21.5, x: new Date(2016,0) }
              ]
          },
          {        
              type: "stackedColumn",
              showInLegend: true,
              name: "Q3",
              color: "#695A42",
              dataPoints: [
                  { y: 7.28, x: new Date(2010,0) },
                  { y: 9.72, x: new Date(2011,0) },
                  { y: 13.30, x: new Date(2012,0) },
                  { y: 14.9, x: new Date(2013,0) },
                  { y: 18.10, x: new Date(2014,0) },
                  { y: 18.68, x: new Date(2015,0) },
                  { y: 22.45, x: new Date(2016,0) }
              ]
          },
          {        
              type: "stackedColumn",
              showInLegend: true,
              name: "Q4",
              color: "#B6B1A8",
              dataPoints: [
                  { y: 8.44, x: new Date(2010,0) },
                  { y: 10.58, x: new Date(2011,0) },
                  { y: 14.41, x: new Date(2012,0) },
                  { y: 16.86, x: new Date(2013,0) },
                  { y: 10.64, x: new Date(2014,0) },
                  { y: 21.32, x: new Date(2015,0) },
                  { y: 26.06, x: new Date(2016,0) }
              ]
      }]
  });
  chart2.render();
  
  function toolTipContent(e) {
      var str = "";
      var total = 0;
      var str2, str3;
      for (var i = 0; i < e.entries.length; i++){
          var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: $<strong>"+e.entries[i].dataPoint.y+"</strong>bn<br/>";
          total = e.entries[i].dataPoint.y + total;
          str = str.concat(str1);
      }
      str2 = "<span style = \"color:DodgerBlue;\"><strong>"+(e.entries[0].dataPoint.x).getFullYear()+"</strong></span><br/>";
      total = Math.round(total * 100) / 100;
      str3 = "<span style = \"color:Tomato\">Total:</span><strong> $"+total+"</strong>bn<br/>";
      return (str2.concat(str)).concat(str3);
  }



  }

  startScan() {
    console.log("UPLOAD FORM : " , this.form);
   this.userName = JSON.parse(sessionStorage.getItem('UserNameInSession'))
   this.form.uploadFilePath = this.uploadPath;
    let resp = this.service.startScan(this.form, this.userName).subscribe((result) => {
   
        
  
   // This code will be executed when the HTTP call returns successfully 
this.requestMapId=result;
this.requestMapId = sessionStorage.setItem('requestMapId', this.requestMapId);
console.log(this.requestMapId);

if(this.requestMapId!=0){
  this.router.navigate(["wecaast/auditscan/reportAuditScan"],this.requestMapId);
}

else{
  this.router.navigate(["wecaast/auditscan/seedUrlFunction"]);
}


     }); 


    
  }
  
    upload() {
        let scanType = this.form.selectScanOption;
        if (scanType == "2") {
          this.currentFileUpload = this.selectedFiles.item(0);
          return this.service.pushFileToStorage(this.currentFileUpload).subscribe((result) => {
            console.log("resultresult : " , result);
          this.uploadPath = result;
          setTimeout(() => {
            this.startScan();
          }, 500);
    }); 

  } else {
          this.uploadPath = "URL_Based";
          setTimeout(() => {
            this.startScan();
          }, 500);
        }
      }
    

   selectFile(event) {
      this.selectedFiles = event.target.files;
      } 


  

}
