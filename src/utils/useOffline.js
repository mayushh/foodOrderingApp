import React, { useState, useEffect } from 'react';

const useOffline = () => {
    const [isOffline, setisOffline] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=Gramin&trackingId=23f9c9e0-97da-b4e2-b4f7-de74c5dec3d3&submitAction=ENTER&queryUniqueId=14bb3934-26f1-2d6b-9972-16b9f8391774");
                if (response.ok) {
                    setisOffline(false);
                } else {
                    setisOffline(true);
                }
            } catch (error) {
                setisOffline(true);
            }
        };

        fetchData();
    }, []);

    return isOffline;
};

export default useOffline;
