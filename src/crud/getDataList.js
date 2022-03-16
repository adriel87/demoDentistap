import {fetchTool} from "../helpers/fetchTool";

export const getDataList = async(url) => {
  
  const data = await fetchTool(url);


  return data; 
    
}
