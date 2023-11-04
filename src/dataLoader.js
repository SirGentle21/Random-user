export async function dataLoader() {

      // Fetch user data from the API when the component mounts
 
    const response = await fetch('https://randomuser.me/api/?results=50');
    if (!response.ok) throw new Error ('Failed to fetch item');
    const item = await  response.json();
    return item.results;
};