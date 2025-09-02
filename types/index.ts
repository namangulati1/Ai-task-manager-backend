export interface User {
    _id: string;
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Task {
    _id: string;
    title: string;
    description: string;
    status: 'to-do' | 'in-progress' | 'done';
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string; //user id
    assignedTo?: string[]; //user ids
}