import React from "react";
import Top from "./components/Top/Top";
import { Route, Switch } from 'react-router'
import TestList from "./components/TestList/TestList";
import { StylesProvider } from '@material-ui/core/styles';
export default function App() {
    return (
        <StylesProvider injectFirst>{/*materialUIが指定するCSSを開発者が作成したCSSより先に読み込まれるように設定する。 */}
           <Switch>
               <Route exact path="/" component={Top} />
               <Route path="/test_list" component={TestList} />
           </Switch>
        </StylesProvider>
    );
}