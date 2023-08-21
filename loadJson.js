export const loadJson = async () => {
    const request = await fetch("./platos.json")
  
    const data = await request.json()
  
    return data
  }