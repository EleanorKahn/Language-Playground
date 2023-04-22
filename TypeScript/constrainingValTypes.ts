//Challenge from Totally Typescript
//Answer by Eleanor

interface User {
    id: number;
    firstName: string;
    lastName: string;
    /**
     * How do we ensure that role is only one of:
     * - 'admin'
     * - 'user'
     * - 'super-admin'
     */
    //role is a "union" type
    role: "admin" | "user" | "super-admin";
  }
  
  export const defaultUser: User = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    // @ts-expect-error
    role: "I_SHOULD_NOT_BE_ALLOWED",
  };