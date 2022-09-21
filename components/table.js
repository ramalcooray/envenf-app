import React, { useState ,useEffect}  from 'react';
import MaterialTable from 'material-table';


export default function Table() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const columns = [
      { title: "Date", field: "actionDate", type: "date", defaultSort:"desc" },
        { title: "Company", field: "offender.name" },
        { title: "Offences", field: "offence.length", emptyValue: 1 },

  ]

  useEffect(() => {
    fetch("https://environment.data.gov.uk/public-register/enforcement-action/registration.json?after=2015-12-10")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
              console.log(data);

              for (let i = 0; i < result.items.length; i++) {
                  var mydate = new Date(result.items[i].actionDate);
                  result.items[i].actionDate = mydate;
                  console.log(result.items[i].actionDate);
              }
              setData(result.items);


        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
      return (
          <MaterialTable
              title="Table"
              data={data}
              columns={columns}
              options={{
                  headerStyle: {
                      backgroundColor: '#01579b',
                      color: '#FFF'
                  }
              }}
              onRowClick={(event, rowData) => console.log(rowData)}

          />
    );
  }
}
