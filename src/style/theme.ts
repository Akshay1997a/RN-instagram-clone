import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode?: string;
    PRIMARY_BACKGROUND_COLOR?: string;
    SECONDARY_BACKGROUND_COLOR?: string;
    PRIMARY_TEXT_COLOR?: string;
    SECONDARY_TEXT_COLOR?: string;
    PRIMARY_BUTTON_COLOR?: string;
    SECONDARY_BUTTON_COLOR?: string;
    HAIRLINE_COLOR?: string;
    GRADIENT: string[];
    SHADOW?: string;

    FONT_REGULAR?: string;
    FONT_MEDIUM?: string;
    FONT_BOLD?: string;

    FONT_SIZE_LARGE?: number;
    FONT_SIZE_MEDIUM?: number;
    FONT_SIZE_SMALL?: number;
  }
}

export type THEME_TYPE = 'light' | 'dark';

export const themeLight: DefaultTheme = {
  mode: 'light',
  PRIMARY_BACKGROUND_COLOR: '#FFF',
  SECONDARY_BACKGROUND_COLOR: '#FAFAFA',
  PRIMARY_TEXT_COLOR: '#343433',
  SECONDARY_TEXT_COLOR: '#343433',
  PRIMARY_BUTTON_COLOR: '#3898F3',
  SECONDARY_BUTTON_COLOR: '#fff',
  GRADIENT: ['#403B4A', '#4AAE9B', '#603813'],
  HAIRLINE_COLOR: '#B3B3B3',
  FONT_SIZE_LARGE: 20,
  FONT_SIZE_MEDIUM: 18,
  FONT_SIZE_SMALL: 16,
};

export const themeDark: DefaultTheme = {
  mode: 'dark',
  PRIMARY_BACKGROUND_COLOR: '#000',
  SECONDARY_BACKGROUND_COLOR: '#121212',
  PRIMARY_TEXT_COLOR: '#fff',
  SECONDARY_TEXT_COLOR: '#fff',
  PRIMARY_BUTTON_COLOR: '#3898F3',
  SECONDARY_BUTTON_COLOR: '#000',
  GRADIENT: ['#403B4A', '#4AAE9B', '#603813'],
  HAIRLINE_COLOR: '#262626',
  FONT_SIZE_LARGE: 20,
  FONT_SIZE_MEDIUM: 18,
  FONT_SIZE_SMALL: 16,
};
