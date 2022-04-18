import { EventEmitter } from "@angular/core"
import { User } from "../interface/user.interface"

export class Emitters{
    static authEmitter=new EventEmitter<User>()
}