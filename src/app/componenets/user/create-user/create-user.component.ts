import { Component, OnInit, HostBinding } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  // @HostBinding('class') classes = 'form-control';

  user: any = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    password: ''
  }

  edit: boolean = false;
  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    // console.log(params);
    if(params.id){
      this.usersService.getUser(params.id)
        .subscribe(
          res=>{
            console.log(res);
            this.user =res;
            this.edit = true;
          },
          err=>console.error(err)
        )
    }
  }

  saveNewUser(){
    this.usersService.addUser(this.user)
      .subscribe(
        res => {
          this.router.navigate(['/usuario']);
        },
        err => console.error(err)
      )
  }

  updateUser(){
    //console.log(this.user)
    this.usersService.updateUser(this.user.id, this.user)
      .subscribe(
        res=>{
          this.router.navigate(['/usuario']);
          console.log(res);
        },
        err=> console.log(err)
      )
  }

}
