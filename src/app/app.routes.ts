import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes:Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'posts', loadChildren: 'app/posts/posts.module#PostsModule' },
    { path: 'pizza-listing', loadChildren: 'app/pizza/pizza.module#PizzaModule' },
    { path: '', redirectTo: 'pizza-listing', pathMatch: 'full' }
   //{ path: '**', component: PageNotFoundComponent }
    // { path: 'about', component: "AboutComponent"},
    // { path: 'posts', component: "PostsComponent"}
];

export const routing = RouterModule.forRoot(routes);