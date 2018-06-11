import { Injectable } from '@angular/core';

declare var jquery: any;
declare var $: any;
var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

@Injectable()
export class Utilities {
  
  constructor() { 
    


  }

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = monthShortNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  toggleSuccess(message:string){
    $(".note-success").html(message);
    $(".note-success").show();

    setTimeout(function() {
      $(".note-success").hide();
    }, 5000);
  }

  

}
