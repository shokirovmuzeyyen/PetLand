
import { useEffect } from "react";

const DM_component = ({name, message, ts}) => {
  
    useEffect(() => {
    
    console.log(name);
  }, []);


  return(
    <div className="justify-space-between">
        <div>
          <label className="justify-space-between" style={{color:"green"}}>{name}:</label>
        </div>
        <div>
          <label className="justify-space-between">{message}</label>
          <label style={{fontSize:'8px', marginLeft:"95%"}} className="justify-space-between">{new Date(ts).getDate()}.{new Date(ts).getMonth()}.{new Date(ts).getFullYear()} {new Date(ts).getHours()}:{new Date(ts).getMinutes()}</label>
        </div>
    </div>
  );
}

export default DM_component
