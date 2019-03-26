import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Post from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @select(s => s.posts.posts.loading) loading$: Observable<boolean>;
  @select(s => s.posts.posts.error) error$: Observable<{}>;
  @select(s => s.posts.posts.data) posts$: Observable<Post[]>;
  
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.loadPosts();
  }
}
