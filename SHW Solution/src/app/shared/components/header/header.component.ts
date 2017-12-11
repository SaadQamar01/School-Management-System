import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    pushRightClass: string = 'push-right';
    navName;
    userType;
    type;
    userData;
    constructor(private translate: TranslateService, public router: Router) {
        console.log(localStorage.getItem('currentUser'));
        var data = localStorage.getItem('currentUser')
        console.log(JSON.parse(data));
        var dataParse = JSON.parse(data)
        this.userData=dataParse;
        this.type = dataParse.type
        if(this.type=="superAdmin"){
            this.navName="SHW Solution";
            this.userType="Super Admin"
        }
        else if(this.type=="admin"){
            this.navName=dataParse.schoolName;
            this.userType="Admin"
        }
        else if(this.type=="employee"){
            this.navName=dataParse.employeeName;
            this.userType="Employee"
        }
        else if(this.type=="student"){
            this.navName=dataParse.studentName;
            this.userType="Student"
        }
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() { }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('currentUser');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
