import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ForumsService } from '../services/forums.service';
import { Forum } from '../services/data';
/* tslint:disable:no-inferrable-types variable-name prefer-const arrow-return-shorthand no-string-literal */
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forum: Forum;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private forumsService: ForumsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.forum = this.forumsService.forum(params['forum_alias']);
      if (!this.forum) {
         this.router.navigate(['/not-found']);
      }
    });
  }
}
