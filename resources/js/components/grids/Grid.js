import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react'

import { render } from 'react-dom'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

const Grid = (props) => {

  const gridRef = useRef()



  const defaultColDef = useMemo( () => ({
    sortable: true,
    resizable: true
  }))

    const onFirstDataRendered = useCallback((params) => {
      gridRef.current.api.sizeColumnsToFit();
    }, []);
 

  return (
       <div>

     {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
     <div className="ag-theme-alpine" style={{width: '100%', height: 600}}>

       <AgGridReact 
           ref={gridRef} // Ref for accessing Grid's API

           rowData={props.rowData} // Row Data for Rows

           columnDefs={props.columnDefs} // Column Defs for Columns
           defaultColDef={defaultColDef} // Default Column Properties

           animateRows={true} // Optional - set to 'true' to have rows animate when sorted

           onFirstDataRendered={onFirstDataRendered}

           onCellClicked={props.cellClickedListener} // Optional - registering for Grid Event

           />
     </div>
   </div>
  )
}

export default Grid