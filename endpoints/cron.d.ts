import { BegetRequest } from '../beget-request';
import { ChangeHiddenState, CreateTask, Task } from '../types/cron.interface';
export declare class CronEndpoint {
    private readonly client;
    constructor(client: BegetRequest);
    /**
     * @private
     */
    private method;
    /**
     * Method returns list of all CronTab tasks.
     * @returns Returns twodimensional array, each string whereof describes a Cron task.
     */
    getList(): Promise<Task[]>;
    /**
     * Method adds new task. Task will be active upon adding.
     * @returns Returns task ID (task ID is unique within one user).
     */
    add(params: CreateTask): Promise<Pick<Task, 'row_number'>>;
    /**
     * Method will delete task with given ID.
     * @returns Returns property of successful or unsuccessful execution.
     */
    delete(params: Pick<Task, 'row_number'>): Promise<boolean>;
    /**
     * Method will change task status.
     * @returns Returns new task ID (the task identifier is unique within one user).
     */
    changeHiddenState(params: ChangeHiddenState): Promise<Pick<Task, 'row_number'>>;
    /**
     * Method returns email, where the display of executed tasks is sent.
     * @returns If no email has been set, method returns NULL.
     */
    getEmail(): Promise<string | null>;
    /**
     * Method sets email, where the display of executed tasks will be sent.
     * @param email Email or empty string;
     * @returns Returns property of successful or unsuccessful execution.
     */
    setEmail(email: string): Promise<boolean>;
}
