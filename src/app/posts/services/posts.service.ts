import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Post from '../models/post';
import { NgRedux } from '@angular-redux/store';
import { IPostsState } from '../store/posts-state';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } from '../store/posts-actions';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private ngRedux: NgRedux<IPostsState>) {
  }

  loadPosts() {
    this.ngRedux.dispatch(fetchPostsRequest());

    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.ngRedux.dispatch(fetchPostsSuccess(posts));
    }, error => {
      this.ngRedux.dispatch(fetchPostsError());
    });
  }
}