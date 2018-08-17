import { Component, OnInit } from '@angular/core';
import { PostsService } from './post.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: 'manage-post.component.html'
})
export class ManagePostComponent implements OnInit {
	routeSubscription;
	postData = {id: 0};

	constructor(private postService: PostsService, private router: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.routeSubscription = this.activatedRoute.params.subscribe(params => {
            let postId = params['id'];
            postId && this.postService.getPost(postId)
            	.subscribe(res => {
					this.postData = res;
				});
        });
	}

	saveUpdatePost(){
		if(this.postData.id){
			this.postService.updatePost(this.postData)
				.subscribe(res => {
					this.router.navigate(['/posts']);
				});			
			} else {
			this.postService.createPost(this.postData)
				.subscribe(res => {
					this.router.navigate(['/posts']);
				});	
			}

	}
}