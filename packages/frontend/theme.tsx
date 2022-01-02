import { createTheme, GlobalStyles, Theme as MuiTheme } from "@mui/material"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type * as _ from "@mui/x-data-grid/themeAugmentation"
import React from "react"

export const globalStyles = (
  <GlobalStyles
    styles={{
      main: {
        padding: "0 60px",
      },
    }}
  />
)

declare module "@emotion/react" {
  interface Theme extends MuiTheme {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    hoge: true
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiButton: {
      defaultProps: {
        role: "button",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "hoge" },
          style: { color: "red" },
        },
      ],
    },
    MuiDataGrid: {
      defaultProps: {
        autoHeight: true,
        headerHeight: 35,
        hideFooter: true,
        disableColumnFilter: true,
        disableColumnMenu: true,
        disableDensitySelector: true,
        disableSelectionOnClick: true,
        disableColumnSelector: true,
        disableVirtualization: true,
        disableExtendRowFullWidth: true,
        hideFooterPagination: true,
        hideFooterSelectedRowCount: true,
        hideFooterRowCount: true,
        components: {
          NoRowsOverlay: () => <>NoRowsOverlay</>,
        },
      },
      styleOverrides: {
        root: {
          margin: "8px 0",
        },
        columnHeader: {
          backgroundColor: "#454545",
          fontWeight: 700,
          fontSize: "16px",
          color: "white",
        },
        cell: {
          fontSize: 16,
          overflowWrap: "break-word",
        },
      },
    },
  },
})
