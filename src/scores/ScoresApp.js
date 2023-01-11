import React from "react";
import styled from "styled-components";
import Table from "./Table";
// import "./Table.css";

const dummyData = [
  {
    id: 1,
    subject: "Buku harian nomor 1",
    score: 60
  },
  {
    id: 2,
    subject: "Buku harian nomor 1",
    score: 70
  }
];
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }

      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }
`;

const ScoresApp = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Score List",
        columns: [
          {
            Header: "Subject",
            accessor: "subject"
          },
          {
            Header: "Score",
            accessor: "score"
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = React.useState(dummyData);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
};

export default ScoresApp;
