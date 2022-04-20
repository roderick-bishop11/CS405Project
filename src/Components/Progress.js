import { Progress } from "antd";


var today = new Date();
var numericalDate = Math.ceil((today - new Date(today.getFullYear(),0,1)) / 86400000);



const ProgressBar = () =>{

return (

    <Progress
    strokeColor={{
      '0%': '#ff7875',
      '100%': '#5c0011',
    }}
    percent={Math.round(numericalDate*100/366)}
    format={percent => `${percent}% through ${today.getFullYear()}`}
    style={{margin:'20px'}}
  />
)
}

export default ProgressBar;