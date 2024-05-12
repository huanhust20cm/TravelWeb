import { type ThemeConfig } from 'antd';

export default {
  token: {
    colorPrimary: '#00b8cd',
    fontFamily: 'Open Sans, Segoe UI, Helvetica Neue, Arial, sans-serif',
    colorText: '#222222',
    colorTextSecondary: '#4B5566',
    colorError: '#D01B1B'
  },
  components: {
    Menu: {
      itemColor: '#fff',
      colorText: 'rgba(255, 255, 255)',
      itemHoverColor: '#fff',
      controlItemBgActive: '#00b8cd',
      colorSplit: 'rgba(5, 5, 5, 0.06)',
      itemHoverBg: '#00b8cd',
      itemBg: '#1e72b0',
      dropdownWidth: 220
    },
    Button: {
      colorPrimary: '#1e72b0',
      colorPrimaryActive: '#06122e',
      colorPrimaryBorder: '#50627a',
      colorPrimaryHover: '#203861',
      colorLinkHover: '#203861',
      colorLinkActive: '#06122e',
      colorLink: '#1e72b0',
      colorBgTextHover: 'rgba(0, 0, 0, 0.04)',
      colorBgTextActive: 'rgba(0, 0, 0, 0.06)',
      borderRadiusSM: 6,
      controlHeight: 44,
      controlHeightLG: 44,
      borderRadiusLG: 6,
      controlHeightSM: 36
    },
    Input: {
      controlHeight: 40,
      controlHeightSM: 40,
      borderRadiusLG: 4
    },

    Select: {
      controlHeight: 40,
      controlHeightSM: 40,
      borderRadiusLG: 6,
      borderRadius: 4
    },
    InputNumber: {
      controlHeight: 40,
      controlHeightSM: 40,
      borderRadius: 4
    },
    Mentions: {
      borderRadius: 4,
      borderRadiusLG: 4,
      controlHeightLG: 40,
      controlHeight: 40,
      controlHeightSM: 40
    },
    DatePicker: {
      controlHeight: 40,
      controlHeightSM: 24
    },
    Table: {
      colorFillAlter: '#fff',
      colorFillContent: '#fff',
      colorFillSecondary: '#fff',
      colorBorderSecondary: '#E6E7E8',
      controlItemBgActive: '#fff',
      controlItemBgActiveHover: '#fff'
    },
    Checkbox: {
      colorPrimary: '#1e72b0',
      colorPrimaryHover: '#1e72b0',
      colorPrimaryBorder: '#50627a',
      colorBorder: '#97A2AB',
      borderRadiusSM: 2,
      colorBgContainerDisabled: 'rgb(245, 245, 245)',
      colorTextDisabled: '#BFBFBF'
    },
    Radio: {
      colorPrimary: '#1e72b0',
      colorPrimaryActive: '#06122e',
      colorPrimaryBorder: '#50627a',
      colorPrimaryHover: '#203861',
      dotSize: 4,
      colorTextDisabled: '#BFBFBF'
    },
    Tabs: {
      colorPrimary: '#1e72b0',
      colorPrimaryHover: '#203861',
      colorPrimaryActive: '#06122e',
      titleFontSize: 16,
      colorText: '#222222',
      itemHoverColor: '#00b8cd'
    },
    Carousel: {
      dotHeight: 4
    }
  }
} as ThemeConfig;
