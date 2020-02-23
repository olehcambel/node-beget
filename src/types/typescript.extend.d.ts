declare namespace Types {
    /**
     * set of types Record + Partial
     * Construct a type with a set of properties K of type T
     */
    type RecordPartial<K extends keyof any, T> = {
        [P in K]?: T;
    };

    type Except<ObjectType, KeysType extends keyof ObjectType> = Pick<
        ObjectType,
        Exclude<keyof ObjectType, KeysType>
    >;
    type Merge<FirstType, SecondType> = Except<
        FirstType,
        Extract<keyof FirstType, keyof SecondType>
    > &
        SecondType;
}
