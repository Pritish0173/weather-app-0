import React, { useEffect, useMemo, useState } from 'react'

const Tab = ({id, selectedTab, handleTabSelection, weatherInfo}) => {

    const [isActiveTab, setIsActiveTab] = useState(false);

    const tabLabel = useMemo(() => {
        switch (id) {
            case 0:
                return 'Today';
            case 1:
                return 'Tommorow';
            case 2:
                return 'Day After Tommorow';
            default:
                return weatherInfo?.dt_txt;
        }
    }, [id])

    useEffect(() => {
        if(selectedTab===id){
            setIsActiveTab(true);
        }
        else{
            setIsActiveTab(false);
        }
    }, [selectedTab]);

    
    const handleTab = () => {
        handleTabSelection(id);
    }
    

  return (
    <div className={`tab ${isActiveTab ? 'active-tab' : ''}`} onClick={handleTab}>
        {tabLabel}
    </div>
  )
}

export default Tab