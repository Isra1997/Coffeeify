import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [LoggingService]
})
export class FooterComponent implements OnInit {

  FacebookClicks=0;
  TwitterClicks=0;
  LinkedInclicks=0;
  GithubClicks=0;

  constructor(private LoggingService: LoggingService) { }

  ngOnInit() {
  }

  addToStatistic(ClickedOn:string){
    switch (ClickedOn) {
      case 'Twitter':
        this.TwitterClicks++;
        this.LoggingService.logStatusChanges('Twitter Clicks has reached ' + this.TwitterClicks);
        break;
      case 'LinkedIn':
        this.LinkedInclicks++;
        this.LoggingService.logStatusChanges('LinkedIn Clicks has reached ' + this.LinkedInclicks);
        break;
      case 'Github':
        this.GithubClicks++;
        this.LoggingService.logStatusChanges('Github Clicks has reached ' + this.GithubClicks);
      default:
        break;
    }
    
    console.log(ClickedOn);
  }
}
