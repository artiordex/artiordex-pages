/**
 * Description : Footer.tsx - 📌 UI 푸터 React 컴포넌트
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import { footerConfig } from '@/configs/footer.config'
import type { FooterWithLinkProps } from '@/types/layout.types'

// 기본 링크 컴포넌트
const DefaultLink = ({
  href,
  children,
  className,
  external,
  title,
}: {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
  title?: string
}) =>
  external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={title}
    >
      {children}
    </a>
  ) : (
    <a
      href={href}
      className={className}
      title={title}
    >
      {children}
    </a>
  )

export default function Footer({
  className,
  containerClassName,
  bottomRightSlot,
  LinkComponent = DefaultLink,
}: FooterWithLinkProps) {

  const {
    brand,
    columns,
    social,
    legal,
    year,
  } = footerConfig

  const renderBrandLogo = () => {
    if (!brand?.logo) return null
    return typeof brand.logo === 'string' ? (
      <img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
    ) : (
      brand.logo
    )
  }

  const renderIcon = (item: any) => {
    if (!item.icon) return <span className="text-sm">{item.label}</span>
    return <i className={`${item.icon} text-xl`} />
  }

  return (
    <footer className={['bg-gray-900 text-white', className].filter(Boolean).join(' ')}>
      <div
        className={[
          'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16',
          containerClassName,
        ]
          .filter(Boolean)
          .join(' ')
        }
      >

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* 왼쪽 브랜드 영역 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center mb-4 gap-3">
              {renderBrandLogo()}
              {brand?.name && (
                <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
              )}
            </div>

            {brand?.description && (
              <div className="text-gray-300 leading-relaxed mb-6">
                {brand.description}
              </div>
            )}

            {/* 회사 정보 - footerBrand.json에서 company 추가 가능 */}
            {"company" in brand && brand.company && (
              <div className="text-gray-400 text-sm space-y-2 mb-6">

                {/* CEO */}
                {brand.company.ceo_kor && (
                  <p className="flex items-center gap-2">
                    <i className="ri-user-line text-blue-400 text-lg"></i>
                    CEO: {brand.company.ceo_kor} ({brand.company.ceo})
                  </p>
                )}

                {/* 사업자등록번호 */}
                {brand.company.business_number && (
                  <p className="flex items-center gap-2">
                    <i className="ri-file-list-3-line text-blue-400 text-lg"></i>
                    사업자등록번호: {brand.company.business_number}
                  </p>
                )}

                {/* 위치 */}
                {brand.company.location && (
                  <p className="flex items-center gap-2">
                    <i className="ri-map-pin-line text-blue-400 text-lg"></i>
                    위치: {brand.company.location}
                  </p>
                )}

                {/* 이메일 */}
                {brand.company.business_email && (
                  <p className="flex items-center gap-2">
                    <i className="ri-mail-line text-blue-400 text-lg"></i>
                    이메일: {brand.company.business_email}
                  </p>
                )}

              </div>
            )}

            {/* 소셜 링크 */}
            {social.length > 0 && (
              <div className="flex gap-6">
                {social.map((s) => (
                  <LinkComponent
                    key={s.label}
                    href={s.href}
                    external={s.external}
                    aria-label={s.label}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {renderIcon(s)}
                  </LinkComponent>
                ))}
              </div>
            )}
          </div>

          {/* 오른쪽 메뉴 컬럼 */}
          <div className="lg:col-span-7 self-start lg:self-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-lg font-semibold mb-4">{col.title}</h4>
                  <ul className="space-y-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <LinkComponent
                          href={l.href}
                          external={l.external}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {l.label}
                        </LinkComponent>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 하단 Footer Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {year} {brand?.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {legal.map((l) => (
                <LinkComponent
                  key={l.label}
                  href={l.href}
                  external={l.external}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  {l.label}
                </LinkComponent>
              ))}
              {bottomRightSlot}
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
