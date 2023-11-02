// Custom Hook to check whether user is online or not.

import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    }, [])

    return onlineStatus;
}

export default useOnlineStatus;