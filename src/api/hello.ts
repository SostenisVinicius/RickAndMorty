
export async function fetchApi(value: number) {
  const result = await fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then(res => res.json())
    .then(data => { 
      console.log(data); 
    });
  return result;
}