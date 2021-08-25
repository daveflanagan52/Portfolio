import { Property } from "@tsed/schema";

export class Message {
    @Property()
    name: string;

    @Property()
    email: string;

    @Property()
    message: string;
}