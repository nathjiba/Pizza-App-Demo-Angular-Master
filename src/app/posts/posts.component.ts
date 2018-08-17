import { Component, OnInit } from '@angular/core';
import { PostsService } from './post.service';

@Component({
	templateUrl: 'posts.component.html'
})
export class PostsComponent implements OnInit {
	posts;
	
	constructor(private postService: PostsService) {}

	ngOnInit() {
		this.postService.getPosts()
			.subscribe(res => this.posts = res );
	}

	removePost(post){
		this.postService.removePost(post.id)
			.subscribe(res => this.posts.splice(this.posts.indexOf(post), 1) );
	}
}