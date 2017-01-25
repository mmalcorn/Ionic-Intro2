import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FeedService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class FeedItem {
    description: string;
    link: string;
    title: string;

  constructor(description: string, link: string, title: string) {
    this.description = description;
    this.link = link;
    this.title = title;
  }
}

export class Feed {
    title: string;
    url: string;

    constructor(title: string, url: string){
        this.title = title;
        this.url = url;

    }
}
