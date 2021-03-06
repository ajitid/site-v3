import tw from 'twin.macro'
import { useTheme } from '~/utils/hooks/use-theme'

export const font = {
  serifBold: tw`font-serif font-bold`,
  serifBoldItalic: tw`font-serif font-semibold italic`,
  sans: tw`font-sans`,
  mono: tw`font-mono`,
}

export type Theme = 'light' | 'dark'

type StyleMapValue = number | string | object

export const useStyleFromMap = <T extends StyleMapValue>(
  themeMap: Record<Theme, T>
): T | null => {
  const { theme } = useTheme()

  if (theme == null) return null

  return themeMap[theme]
}

export type Kind =
  | 'default' // or info
  | 'accent'
  | 'positive'
  | 'negative'
  | 'warning'

// for sizing and spacing
export type Size =
  | 'none' // useful for spacing
  | 'full' // eg. full width
  | 'xs'
  | 's'
  | 'm' // or default/base
  | 'l'
  | 'xl'
  | '2xl'

/*
// responsiveness is hard to implement as twin.macro does not supports
// string interpolation as of now (see https://github.com/ben-rogerson/twin.macro/issues/17)
// also doing responsive and states (active hover) in Tailwind is better

export enum Screen {
  SM = "sm-size-640-px",
  MD = "md-size-768-px",
  LG = "lg-size-1024-px",
  XL = "xl-size-1280-px",
}

export const extractSize = (s: string) =>
  parseInt(new String(s).replace(/.*-size-/, "").replace("-px", ""));

export type ScreenMap<T> = Partial<Record<Screen, T>>;
*/
