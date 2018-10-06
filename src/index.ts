import * as DotEnv from "dotenv-extended";
DotEnv.load();

export class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
}

function run() {
  const obj = new Person("masterchief");
  console.log(obj.name);
}

run();
