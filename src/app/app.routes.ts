import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { DetailsComponent } from './details/details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'store', component: StoreComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'contact-us', component: ContactUsComponent },
];
