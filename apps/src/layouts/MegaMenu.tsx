/**
 * Description : MegaMenu.tsx - 📌 메가메뉴 레이아웃 전용 컴포넌트
 * Author : Shiwoo Min
 * Date : 2025-11-18
 */

import type { MegaMenuConfig } from "@/configs/header.config";
import { Link } from "react-router-dom";

interface MegaMenuLayoutProps {
  menu: MegaMenuConfig;
  menuId?: string; // 필요하면 메뉴 ID 참고 가능
}

export default function MegaMenuLayout({ menu }: MegaMenuLayoutProps) {
  return (
    <div className="w-full bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">

        {/* ▣ 상단 컬럼들 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
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

        {/* 하단 Footer */}
        {menu.footer && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

              {/* 연락처 */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                {menu.footer.contacts.map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.href}
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                  >
                    <i className={`${contact.icon} text-base`}></i>
                    <span>{contact.label}</span>
                  </a>
                ))}
              </div>

              {/* CTA 버튼 */}
              <div className="flex gap-3">
                {menu.footer.actions.map((action, idx) => (
                  <Link
                    key={idx}
                    to={action.to}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors
                      ${idx === 0
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }
                    `}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
