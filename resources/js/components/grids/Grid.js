import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react'

import { render } from 'react-dom'
import { AgGridReact } from 'ag-grid-react'
import { AG_GRID_LOCALE_LV } from './locale.lv.js'


import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'; // Optional theme CSS

const Grid = (props) => {

  const gridRef = useRef()



  const defaultColDef = useMemo( () => ({
    sortable: true,
    resizable: true
  }))

    const onFirstDataRendered = useCallback((params) => {
      gridRef.current.api.sizeColumnsToFit()
    }, []);
 

  return (
       <div>

     {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
     <div className="ag-theme-alpine-dark shadow" style={{width: '100%', height: '67vh'}}>

       <AgGridReact 
           ref={gridRef} // Reference priekš Grid API
           
           localeText={AG_GRID_LOCALE_LV} // Tulkojums latviešu valodā

           rowData={props.rowData} // ReactProps kā ierakstu masīvs

           columnDefs={props.columnDefs} // ReactProps kā kolonnu opciju definešana
           defaultColDef={defaultColDef} // Noklusējuma kolonnu opcijas

           animateRows={true} // Rindu animācija

           onFirstDataRendered={onFirstDataRendered} // Event, kas izpildās, kad tabulas dati ir ielādēti

           onCellClicked={props.cellClickedListener} // ReactProps funkcija, kas atbild par klikšķi uz ieraksta

           paginationAutoPageSize={true} //Paginācija
           pagination={true}

           />
     </div>
   </div>
  )
}

export default Grid