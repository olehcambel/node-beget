export interface Task {
    /**
     * task ID
     * @example '1000'
     */
    row_number: number; // string
    /**
     * Minutes
     * @example '*'
     */
    minutes: string;
    /**
     * Hours
     * @example '*'
     */
    hours: string;
    /**
     * Days
     * @example '*'
     */
    days: string;
    /**
     * Months
     * @example '10,11'
     */
    months: string;
    /**
     * Weekdays
     * @example '*'
     */
    weekdays: string;
    /**
     * Command
     * @example 'wget -O /dev/null http://wget vk.com'
     */
    command: string;
    /**
     * task status (active / inactive), type boolean: 0 or 1;
     * @example '1'
     */
    is_hidden: 1 | 0;
}

export type CreateTask = Pick<
    Task,
    'minutes' | 'hours' | 'days' | 'months' | 'weekdays' | 'command'
>;

export type ChangeHiddenState = Pick<Task, 'row_number' | 'is_hidden'>;
