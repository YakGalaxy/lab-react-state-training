import React from 'react'

function ClickablePicture() {
     const [toggle, setToggle] = useState(true);
  return (
    <div>
      <img src="/src/assets/images/maxence.png" onClick={() => setToggle(count + 1)}>{count}></img>>
    </div>
  );
}

export default ClickablePicture