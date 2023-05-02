//Challenge from Totally Typescript
//Answer by Eleanor

interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: "admin" | "user" | "super-admin";
    posts: Post[];
    //or using "generic type" posts: Array<Post>
  }
  
  interface Post {
    id: number;
    title: string;
  }
  
  export const defaultUser: User = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    role: "admin",
    posts: [
      {
        id: 1,
        title: "How I eat so much cheese",
      },
      {
        id: 2,
        title: "Why I don't eat more vegetables",
      },
    ],
  };