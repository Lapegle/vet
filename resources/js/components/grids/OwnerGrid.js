import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react'

import { useNavigate } from 'react-router-dom'
import { AgGridReact } from 'ag-grid-react'
import { AG_GRID_LOCALE_LV } from './locale.lv.js'

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

const OwnerGrid = () => {

    const navigate = useNavigate();

    const gridRef = useRef()
    const [rowData, setRowData] = useState()
    
  
    const [columnDefs, setColumnDefs] = useState([
      {headerName: 'Vārds un uzvārds', field: 'name', filter: true},
      {headerName: 'Adrese', field: 'address'},
      {headerName: 'Telefona numurs', field: 'phone', filter: true}
    ])
  
    const defaultColDef = useMemo( () => ({
      sortable: true,
      resizable: true
    }))
  
    const cellClickedListener = useCallback( event => {
      navigate('/pets/owner/' + event.data.id )
    }, []);
  
    useEffect(() => {
      fetch('http://localhost:8000/api/owners')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
    }, []);
  


   
    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.sizeColumnsToFit();
      }, []);
  
    return (
         <div>
  
       {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
       <div className="ag-theme-alpine" style={{width: '100%', height: 600}}>
  
         <AgGridReact 
             ref={gridRef} // Ref for accessing Grid's API

             localeText={AG_GRID_LOCALE_LV}
  
             rowData={rowData} // Row Data for Rows
  
             columnDefs={columnDefs} // Column Defs for Columns
             defaultColDef={defaultColDef} // Default Column Properties
  
             animateRows={true} // Optional - set to 'true' to have rows animate when sorted
             rowSelection='multiple' // Options - allows click selection of rows
  
             onCellClicked={cellClickedListener} // Optional - registering for Grid Event

             onFirstDataRendered={onFirstDataRendered}
             />
       </div>
     </div>
    )
}

export default OwnerGrid