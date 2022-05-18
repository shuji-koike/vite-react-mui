import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Button, buttonClasses } from "@mui/material"
// import { DataGrid } from "@mui/x-data-grid"
import React from "react"

export default function IndexPage() {
  return (
    <Main>
      <Button>default</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="text">text</Button>
      <Button variant="hoge">hoge</Button>
      <Button className="hoge">hoge</Button>
      <StyledButton>StyledButton</StyledButton>
      <Button css={buttonStyle}>buttonStyle</Button>
      <Button
        css={css`
          color: green;
        `}
      >
        css attribute
      </Button>
      <Button sx={{ color: ["red", "blue", "green"] }}>sx</Button>
      {/* <DataGrid
        checkboxSelection
        columns={[
          { field: "col1", headerName: "Column 1", width: 150 },
          { field: "col2", headerName: "Column 2", width: 150 },
        ]}
        rows={[
          { id: 1, col1: "Hello", col2: "World" },
          { id: 2, col1: "DataGridPro", col2: "is Awesome" },
          { id: 3, col1: "MUI", col2: "is Amazing" },
        ]}
      /> */}
    </Main>
  )
}

const StyledButton = styled(Button)`
  color: blue;
`

const buttonStyle = css`
  color: blue;
  color: red;
`

const Main = styled.main`
  margin: ${({ theme }) => theme.spacing(1)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: flex;
    flex-direction: column;
  }
  ${StyledButton} {
    font-size: 1.2rem;
  }
  .${buttonClasses.root} {
    margin: 4px 0;
  }
`
