import { EmailNotifier } from "./EmailNotifier";
import { LogHandler } from "./LogHandler";
import { User } from "./User";
import { UsersRepository } from "./UsersRepository";

const logHandler = new LogHandler();
const emailNotifier = new EmailNotifier();
const repo = new UsersRepository();

repo.attach(logHandler);
repo.attach(emailNotifier);

repo.createUser(new User('John', 12));