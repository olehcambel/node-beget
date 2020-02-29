import { BegetRequest } from '../beget-request';
import { Methods } from '../types/controller.interface';
import { ChangeHiddenState, CreateTask, Task } from '../types/cron.interface';

export class CronEndpoint {
    constructor(private readonly client: BegetRequest) {}

    /**
     * @private
     */
    private method<T>(method: Methods['cron'], data?: object): Promise<T> {
        return this.client.api('cron', method, data);
    }

    /**
     * Method returns list of all CronTab tasks.
     * @returns Returns twodimensional array, each string whereof describes a Cron task.
     */
    getList(): Promise<Task[]> {
        return this.method('getList');
    }

    /**
     * Method adds new task. Task will be active upon adding.
     * @returns Returns task ID (task ID is unique within one user).
     */
    add(params: CreateTask): Promise<Pick<Task, 'row_number'>> {
        return this.method('add', params);
    }

    /**
     * Method will delete task with given ID.
     * @returns Returns property of successful or unsuccessful execution.
     */
    delete(params: Pick<Task, 'row_number'>): Promise<boolean> {
        return this.method('delete', params);
    }

    /**
     * Method will change task status.
     * @returns Returns new task ID (the task identifier is unique within one user).
     */
    changeHiddenState(params: ChangeHiddenState): Promise<Pick<Task, 'row_number'>> {
        return this.method('changeHiddenState', params);
    }

    /**
     * Method returns email, where the display of executed tasks is sent.
     * @returns If no email has been set, method returns NULL.
     */
    getEmail(): Promise<string | null> {
        return this.method('getEmail');
    }

    /**
     * Method sets email, where the display of executed tasks will be sent.
     * @param email Email or empty string;
     * @returns Returns property of successful or unsuccessful execution.
     */
    setEmail(email: string): Promise<boolean> {
        return this.method('setEmail', { email });
    }
}
