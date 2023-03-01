import { Component } from "@angular/core";
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    serverId:number=101;
    serverStatus:string="OFFLINE";
    servercreationstatus="no server was created"
    serverName=""
    
    // here we can define the method and we can write the method name in string interpolation
    allownewserver=false;
    constructor(){
       setTimeout(()=>{this.allownewserver=true},2000)
    }
    onaddserver(){
        this.servercreationstatus="server was created"
    }
    onupdateservername(event: any){
           console.log(event),
           this.serverName=(event.target.value)
           
    }
}