/**
 * Description : MegaMenuLayout.tsx - 📌 메가메뉴 레이아웃 전용 컴포넌트
 * Author : Shiwoo Min
 * Date : 2025-11-18
 */

import type { MegaMenuConfig } from "@/configs/header.config";
import { Link } from "react-router-dom";

interface MegaMenuLayoutProps {
  menu: MegaMenuConfig; // JSON 기반 columns[] 구조
}

export default function MegaMenuLayout({ menu }: MegaMenuLayoutProps) {
  return (
    <div className="bg-white shadow-lg border-b border-gray-100 relative z-40">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-4 gap-10">

          {menu.columns.map((column) => (
            <div key={column.id} className="space-y-3">

              {/* Column Title */}
              {column.title && (
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {column.title}
                  </h3>
                </div>
              )}

              {/* Column with Direct Links */}
              {column.links && !column.groups && (
                <ul className="space-y-2">
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.to}
                        className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Column with Groups */}
              {column.groups && (
                <div className="space-y-4">
                  {column.groups.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-2">
                      {group.title && (
                        <div className="border-b border-gray-100 pb-1">
                          <h4 className="text-xs font-semibold text-gray-800">
                            {group.title}
                          </h4>
                        </div>
                      )}
                      <ul className="space-y-1">
                        {group.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <Link
                              to={link.to}
                              className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
