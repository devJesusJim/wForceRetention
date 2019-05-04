import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {ProductComponent} from "./product/product.component";
import {ContactComponent} from "./contact/contact.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {QuestionsComponent} from "./questions/questions.component";
import {ProfileComponent} from "./profile/profile.component";
import {EmployeeSurveyDownloadComponent} from "./employee-survey-download/employee-survey-download.component";
import {ManagerReportComponent} from "./manager-report/manager-report.component";
import {ReportsComponent} from "./reports/reports.component";
import {ManagerReportPdfComponent} from "./manager-report-pdf/manager-report-pdf.component";
import {FlexibleOptionsComponent} from "./flexible-options/flexible-options.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: AuthenticationComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'product', component: ProductComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'report', component: ReportsComponent},
    {path: 'employee-survey', component: EmployeeSurveyDownloadComponent},
    {path: 'questions/:id', component: QuestionsComponent},
    {path: 'manager-report', component: ManagerReportComponent},
    {path: 'manager-report-pdf', component: ManagerReportPdfComponent},
    {path: 'flexible-options', component: FlexibleOptionsComponent},
    {path: 'about-us', component: AboutComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {
}
