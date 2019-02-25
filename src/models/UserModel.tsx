import { TaskModel } from './TaskModel';

export interface UserModel {
    userId: number;
    firstname: string;
    lastname: string;
    tasks: TaskModel[];
}

export namespace UserModel {
    export enum Filter {
      SHOW_ALL = 'all',
      SHOW_YOUNG_ONLY = 'youngs',
      SHOW_HIGHT_SCORE = 'hscore'
    }
  }