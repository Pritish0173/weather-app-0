import React, { useEffect, useState } from 'react'

const Tab = ({id, selectedTab, handleTabSelection, weatherInfo}) => {

    const [isActiveTab, setIsActiveTab] = useState(false);

    const handleTab = () => {
        handleTabSelection(id);
    }

    useEffect(() => {
        if(selectedTab===id){
            setIsActiveTab(true);
        }
        else{
            setIsActiveTab(false);
        }
    }, [selectedTab]);
    

  return (
    <div className={`tab ${isActiveTab ? 'active-tab' : ''}`} onClick={handleTab}>
        {weatherInfo?.dt_txt}
    </div>
  )
}

export default Tab