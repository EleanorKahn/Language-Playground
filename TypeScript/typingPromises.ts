//Challenge from Totally Typescript
//Answer by Eleanor

interface LukeSkywalker {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  }
  
  //goal - how to tell TS that the async function below should return res.json
  //which is of type LukeSkywalker
  //could also do const data: LukeSkywalker = await fetch
  export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
    const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
      return res.json();
    });
  
    return data;
    //could also say 
    //return data as LukeSkywalker, which is a cast
  };