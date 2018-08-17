import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { PostsService } from './post.service';
import { PostsComponent } from './posts.component';
import { ManagePostComponent } from './manage-post.component';
import postRoutes  from './posts.routes';

@NgModule({
  declarations: [
    PostsComponent,
    ManagePostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    postRoutes
  ],
  providers: [ PostsService ]
})
export class PostsModule { }