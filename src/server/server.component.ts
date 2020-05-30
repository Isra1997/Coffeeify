// import from angular so that ts can uderstand that this is a component
import {Component} from '@angular/core';


@Component({
    // this is the selector to be used in the hrml file
    selector:'app-server',
    // this is the html file that will represent the component
    templateUrl: 'server.component.html'
})

export class ServerComponent{

}