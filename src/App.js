import React from "react";
import Top from "./components/Top/Top";
import { StylesProvider } from '@material-ui/core/styles';


export default function App() {
    return (
        <StylesProvider injectFirst>{/*materialUIが指定するCSSを開発者が作成したCSSより先に読み込まれるように設定する。 */}
            <Top />
        </StylesProvider>
    );
}