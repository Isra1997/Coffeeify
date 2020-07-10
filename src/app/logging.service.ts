export class LoggingService{
    logStatusChanges(status: string){
        console.log('The following change has been changes:', '\n' , status);
    }
}