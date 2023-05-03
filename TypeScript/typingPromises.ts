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
  export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
    const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
      return res.json();
    });
  
    return data;
  };