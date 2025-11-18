/**
 * Description : SearchMenu.tsx - 📌 검색 메뉴 레이아웃 React 컴포넌트
 * Author : Shiwoo Min
 * Date : 2025-09-19
 */

import React from "react";

interface Props {
  query: string;
  onQueryChange: (v: string) => void;
  onClose: () => void;
}

const SearchMenuLayout: React.FC<Props> = ({ query, onQueryChange, onClose }) => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-4">

          <i className="ri-search-line text-gray-500 text-2xl" />

          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="검색어를 입력하세요..."
            className="flex-1 text-lg outline-none text-gray-700"
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="검색 닫기"
            className="text-gray-400 hover:text-gray-600"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>

        </div>
      </div>
    </div>
  );
};

export default SearchMenuLayout;
