import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BusSelectionService } from 'src/app/services/bus-selection.service';
import { Journey_Route } from '../models/route.model';

@Component({
  selector: '.app-select-bus',
  templateUrl: './select-bus.component.html',
  styleUrls: ['./select-bus.component.css']
})
export class SelectBusComponent implements OnInit {

  pnumber=1;

  place:Place[]=[];
  
    constructor(
      private busSelection : BusSelectionService,
      private router:Router
    ) {
     this.place[0]=new Place()
     }
  
    ngOnInit() {
   
    }
  
     getAllCities(){
       
     }
  
    SearchBus(form: NgForm) {
      let leaving_form = form.value.leaving_form;
      let destination;
     
    
      this.place.filter(iteam=>{
        if(iteam.key==form.value.going_to){
          destination=iteam.value
        }
      })
  
      let date = form.value.depart_date;
      let route:Journey_Route = {
        leaving_form: leaving_form,
        going_to: destination,
        date:date
      }
      localStorage.setItem("route", JSON.stringify(route))
      let routeId = form.value.going_to;
      // this.busSelection.getRoueId(routeId);
      this.router.navigate(['search']);
    }
  
    leave(e){
   
      let leavingfrom=e.target.value;
      console.log(leavingfrom)
      if(leavingfrom=='dhaka'){
        this.place= [
          {key:'1109001', value:'Comilla'} ,
          {key:'1109002', value:'Chittagong'} ,
          {key:'1109004', value:'KuaKata'} ,
          {key:'1109005', value:'Coxs Bazar'},
          {key:'1109006', value:'Rajshahi'} 
   
        ]
    }
    else if(leavingfrom=='comilla'){
      this.place= [
        {key:'2209002', value:'Chittagong'} ,
        {key:'2209001', value:'Dhaka'} ,
        {key:'2209003', value:'Rajshahi'} ,
       
  
      ]
    }
    else if(leavingfrom=='chittagong'){
      this.place= [
        {key:'3309003', value:'Mymensingh'} ,
        {key:'3309001', value:'Dhaka'} ,
        {key:'3309002', value:'Sylet'} ,
     
      ]
    }
  
  }
  
  
  }
  export class Place {
    key:string;
    value:string;
  }
