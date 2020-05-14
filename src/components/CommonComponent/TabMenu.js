
import React from 'react';
import { AppBar, Tabs, Tab } from "@material-ui/core";
import "./TabMenu.css";
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

export default function TabMenu({value}) {
    return (
        <div>
            <AppBar className="buttomMenu" color="inherit">
                <Tabs value={value} variant="fullWidth" indicatorColor="primary">
                    <Tab
                        component="a" href="/test_list" label="TEST" {...a11yProps(0)} />
                    <Tab
                        component="a" href="/edit" label="EDIT" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
        </div>
    );

}
