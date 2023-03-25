import { EventEmitter, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  dataEmitter=new EventEmitter<{data:any,editMode:boolean,currentProductId:number}>();
    raiseDataEmitterEvent(data:any,editMode:boolean,currentProductId:number)
    {
        this.dataEmitter.emit({data:data,editMode:editMode,currentProductId:currentProductId})
    }
}
