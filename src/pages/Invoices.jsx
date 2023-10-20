import { Grid } from "../features/DataGrid/index"
import { mockDataInvoices } from '../data/mockData'

function Invoices() {

    const costRender = ({ row: { cost } }) => {
        return (

            <p className='text-greenAccent-500'>
                ${cost}
            </p>
        )
    }

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "cost", headerName: "Cost", flex: 1, renderCell: costRender },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "date", headerName: "Date", flex: 1 },
    ]

    return (
        <div className='flex flex-1 m-auto min-w-0'>
            <Grid
                title="Invoices"
                subtitle="Managing the Invoices"
                columns={columns}
                rowData={mockDataInvoices}
                checkBox />
        </div>
    )
}

export default Invoices;