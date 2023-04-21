//Goal - set the "last" arg as optional 
//Challenge from Totally Typescript
//Answer by Eleanor

type Person = {
  first: string;
  last?: string;
};

export const getName = (params: Person) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

// it("Should work with just the first name", () => {
//   const name = getName({
//     first: "Matt",
//   });

//   expect(name).toEqual("Matt");
// });

// it("Should work with the first and last name", () => {
//   const name = getName({
//     first: "Matt",
//     last: "Pocock",
//   });

//   expect(name).toEqual("Matt Pocock");
// });