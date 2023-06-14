import { Tab, TabId, Tabs } from '@blueprintjs/core';
import { Navigation } from "../../components";
import { useCallback, useState } from 'react';

const TabId = {
    ROSTERS: 'rosters',
    SCORE: 'score',
}

const TabPanels = {
    [TabId.ROSTERS]: (<p>R</p>),
    [TabId.SCORE]: (<p>S</p>),
};

export const StatsPage = () => {

    const [selectedTab, setSelectedTab] = useState<TabId>(TabId.ROSTERS);

    const handleTabChange = useCallback((newTabId: TabId) => {
        setSelectedTab(newTabId);
    }, [setSelectedTab]);

    return (
        <>
            <Navigation tabs={
                <Tabs
                    animate
                    selectedTabId={selectedTab}
                    onChange={handleTabChange}
                >
                    <Tab id={TabId.ROSTERS} title='Rosters' />
                    <Tab id={TabId.SCORE} title='Score' />
                </Tabs>
            } />
            { TabPanels[selectedTab] }
        </>
    );
}