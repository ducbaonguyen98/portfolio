import { useState } from 'react';

const useToggle = () => {
    const [toggle, setToggle] = useState(true);

    const set = () => setToggle(pre => !pre);

    return {
        toggle, set
    }
}

export default useToggle;