import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import { AgGridReact } from 'ag-grid-react'
import { AG_GRID_LOCALE_LV } from './locale.lv.js'
import moment from 'moment'

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

const PetVisitsGrid = (props) => {

  const navigate = useNavigate()

    const gridRef = useRef()
    const [rowData, setRowData] = useState()

    moment.locale('lv')
    
  
    const [columnDefs, setColumnDefs] = useState([
      {headerName: 'Datums un laiks', field: 'created_at',
      cellRenderer: (data) => {
        return moment.utc(data.data.created_at).format('YYYY-MM-DD HH:mm');
      }, width: '205px', resizable: false},
      {headerName: 'Temperatūra', field: 'temperature', width: '160px', resizable: false, sortable: false},
      {headerName: 'Sirds ritms', field: 'heart_rate', width: '160px', resizable: false, sortable: false},
      {headerName: 'Elpošanas ritms', field: 'breath_rate', width: '190px', resizable: false, sortable: false},
      {headerName: 'Noskaņojums', field: 'mood', sortable: false},
      {headerName: 'Anamnēze', field: 'history', sortable: false},
      {headerName: 'Diagnoze', field: 'diagnosis', sortable: false},
      {headerName: 'Norādes', field: 'instructions', sortable: false},
      {headerName: 'Cena', field: 'price', cellRenderer: (data) => {
        return data.data.price + ' €';
      }, width: '115px', resizable: false}
    ])
  
    const defaultColDef = useMemo( () => ({
      sortable: true,
      resizable: true
    }))
  
    const cellClickedListener = useCallback( event => {
      navigate('/visit/' + event.data.id )
    }, []);
  
    useEffect(() => {
      fetch('http://localhost:8000/api/pet/' + props.id)
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

export default PetVisitsGrid