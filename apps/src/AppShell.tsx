/**
 * Description : AppShell.ts -📌 레이아웃 최상위 설정 및 페이지 라우터 연결
 상상 * Author : Shiwoo Min
 * Date : 2025-09-16
 */

// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

/* 공통 레이아웃 */
import AppShell from "@/layouts/AppShell";

/* SPA 라우팅 */
// import { AppRoutes } from "@/router/index";

const App = () => {
  return (
    <HashRouter>
      {/* 최상위 공통 레이아웃 */}
      <AppShell>
        {/* 페이지 라우터 */}
        {/* <AppRoutes /> */}
        <div style={{ padding: 40, fontSize: 32 }}>Hello World</div>
      </AppShell>
    </HashRouter>
  );
};

export default App;
