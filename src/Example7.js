import React, { useState, useMemo } from 'react';

function Example7() {
    const [xiaohong, setXiaohong] = useState('小红待机状态');
    const [zhiling, setZhiLing] = useState('志玲待机状态');
    return (
        <>
            <button onClick={() => setXiaohong(new Date().getTime())}>小红</button>
            <button onClick={() => setZhiLing(new Date().getTime() + ',志玲向我们走来了')}>志玲</button>
            <ChildComponent name={xiaohong}>
                {zhiling}
            </ChildComponent>
        </>
    )
}

function ChildComponent({ name, children }) {
    function changeXiaohong() {
        console.log('她来了,她来了,小红向我们走来了');
        return name + ',小红向我们走来了'
    }
    const actionXiaohong = useMemo(() => changeXiaohong(), [name])
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default Example7;