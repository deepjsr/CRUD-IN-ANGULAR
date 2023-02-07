import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployesDashboardModal } from './employee-dashboard.modal';


@Component({
  selector: 'app-employes-dashboard',
  templateUrl: './employes-dashboard.component.html',
  styleUrls: ['./employes-dashboard.component.css']
})
export class EmployesDashboardComponent implements OnInit {

  FormValue !:FormGroup
  employeeModelObj:EmployesDashboardModal=new EmployesDashboardModal
  employes !:any
  ifedit:boolean=false;
  constructor(private formbuilder:FormBuilder,private api:ApiService) { }


  ngOnInit(): void {
    this.FormValue=this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      mobile:[''],
      salary:[''],
    })
    this.getEmployeeDetails()
  }
  doPostEmpDetails(){
    this.employeeModelObj.firstName=this.FormValue.value.firstname;
    this.employeeModelObj.lastName=this.FormValue.value.lastname;
    this.employeeModelObj.email=this.FormValue.value.email;
    this.employeeModelObj.mobile=this.FormValue.value.mobile;
    this.employeeModelObj.salary=this.FormValue.value.salary;
    this.api.postReq(this.employeeModelObj).subscribe(res=>{
      console.log(res);
      alert("Employee added successfully");
      this.FormValue.reset();
      let ref=document.getElementById('close');
      ref?.click();
      error: (e: any) => alert(e);
      this.getEmployeeDetails();
    })

  }
  getEmployeeDetails() {
    this.api.getReq().subscribe(res=>
      this.employes=res
      )

  }
  doDeleteEmpDetails(empId:any) {
 this.api.deleteReq(empId.id).subscribe(res=>
     { alert('Data deleted successfully');
      this.getEmployeeDetails();
})
}
  doEditEmployee(emprow:any) {
    this.ifedit=true;
    this.employeeModelObj.id=emprow.id;
    this.FormValue.controls['firstname'].setValue(emprow.firstName);
    this.FormValue.controls['lastname'].setValue(emprow.lastName);
    this.FormValue.controls['email'].setValue(emprow.email);
    this.FormValue.controls['mobile'].setValue(emprow.mobile);
    this.FormValue.controls['salary'].setValue(emprow.salary);

    }
    doUpdateEmployee(){
      this.employeeModelObj.firstName=this.FormValue.value.firstname;
      this.employeeModelObj.lastName=this.FormValue.value.lastname;
      this.employeeModelObj.email=this.FormValue.value.email;
      this.employeeModelObj.mobile=this.FormValue.value.mobile;
      this.employeeModelObj.salary=this.FormValue.value.salary;
      this.api.updateReq(this.employeeModelObj,this.employeeModelObj.id).subscribe(res=>
      {
        alert('Updated Successfully');
        this.FormValue.reset();
        let ref = document.getElementById('close');
        ref?.click();
        this.getEmployeeDetails();
      })

  }
}
