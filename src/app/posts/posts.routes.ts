import { RouterModule, Routes } from '@angular/router';
import { ManagePostComponent } from './manage-post.component';
import { PostsComponent } from './posts.component';

const routes = [
	{ path: '', component: PostsComponent },
    { path: 'new-post', component: ManagePostComponent},
    { path: ':id/edit', component: ManagePostComponent}
];

export default RouterModule.forChild(routes);