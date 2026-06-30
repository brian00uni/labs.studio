import type { ElementType } from 'react'

// Vue의 v-html처럼 콘텐츠 문자열 안의 마크업(<br>, <strong> 등)을 그대로 렌더링한다.
// 콘텐츠는 content.ts에서 직접 관리하는 신뢰된 정적 문자열이므로 dangerouslySetInnerHTML 사용.
// 줄바꿈은 문자열에 <br /> 을 넣으면 된다.
type RichTextProps = {
  as?: ElementType
  html: string
  className?: string
}

export function RichText({ as: Tag = 'span', html, className }: RichTextProps) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
