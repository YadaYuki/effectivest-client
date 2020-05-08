import React from "react";
import Top from "./components/Top/Top";
import TestList from "./components/TestList/TestList";
import Edit from "./components/Edit/Edit";
import CreateTest from "./components/CreateTest/CreateTest";

import { Route, Switch } from 'react-router';
import { StylesProvider } from '@material-ui/core/styles';
export default function App() {
    return (
        <StylesProvider injectFirst>{/*materialUIが指定するCSSを開発者が作成したCSSより先に読み込まれるように設定する。 */}
           <Switch>
               <Route exact path="/" component={Top} />
               <Route path="/test_list" component={TestList} />
               <Route path="/edit" component={Edit} />
               <Route path="/create_test" component={CreateTest} />
           </Switch>
        </StylesProvider>
    );
}