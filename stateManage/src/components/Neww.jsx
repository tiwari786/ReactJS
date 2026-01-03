import React, { useState } from 'react';

const Neww = () => {
    const [marks, setMarks] = useState([10, 40, 14, 85, 38])

    function graceStudent() {
        const newMakrs = marks.map(function (elem) {
            if (elem > 95) {
                return elem
            } else {
                return elem + 5
            }
        })
        setMarks(newMakrs)
    }

    return (
        <div>
            {marks.map((elem, idx) => {
                return <h1 key={idx}> student{idx + 1} = {elem} {elem > 33 ? "PASS" : "FAIL"} </h1>
            })}
            <button onClick={graceStudent}>Give me grace</button>
        </div>
    );
}

export default Neww;
