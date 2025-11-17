/**
 * Description : AppShell.ts -📌 레이아웃 최상위 설정 및 페이지 라우터 연결
 상상 * Author : Shiwoo Min
 * Date : 2025-09-16
 */

// import { BrowserRouter } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

// Main Page
import MainPage from "@/pages/main";

/* SPA 라우팅 완성 후 풀기 */
// import { AppRoutes } from "@/router/index";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* 페이지 라우터 */}
        {/* <AppRoutes /> */}

        {/* 메인 홈 페이지 */}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
