import "../styles/Angle.css"
import styled,{keyframes} from "styled-components"
export default function Angle({angle}) {
  return (
    <>
      <div>
        <div className="circle" />
        <Line className="lines line-1" />
        <div className="lines line-2" />
      </div>
    </>
  );
}

const keyfr = keyframes`
from{transform: rotate(0px);}
to{
  transform: rotate(-angle);
}
`;
const Line = styled.div`
  animation-name: ${keyfr};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  transform-origin: 0% 0%;
`;