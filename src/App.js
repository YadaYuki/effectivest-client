import React from "react";
// page component
import Top from "./components/Top";
import TestList from "./components/TestList";
import Edit from "./components/Edit";
import EditTest from "./components/EditTest";
import InputInfo from "./components/InputInfo";
import Test from "./components/Test";

import { Route, Switch } from 'react-router';
import { StylesProvider } from '@material-ui/core/styles';

export default function App() {
    return (
        <StylesProvider injectFirst>{/*materialUIが指定するCSSを開発者が作成したCSSより先に読み込まれるように設定する。 */}
           <Switch>
               <Route exact path="/" component={Top} />
               <Route path="/test_list" component={TestList} />
               <Route path="/edit" component={Edit} />
               <Route path="/input_info" component={InputInfo} />
               <Route path="/edit_test" component={EditTest} />
               <Route path="/test" component={Test} />
           </Switch>
        </StylesProvider>
    );
}