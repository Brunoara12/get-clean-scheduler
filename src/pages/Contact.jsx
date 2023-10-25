import { Grid } from "../features/DataGrid/index"
import { mockDataContacts } from '../data/mockData'

function Contact() {

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", flex: 1 },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "address", headerName: "Address", flex: 1 },
        { field: "city", headerName: "City", flex: 1 },
        { field: "zipCode", headerName: "ZipCode", flex: 1 },
    ]

    return (
        <div className='flex flex-1 min-w-0'>
            <Grid
                title="Contact"
                subtitle="Managing the Contacts"
                columns={columns}
                rowData={mockDataContacts}
                toolBar />
        </div>
    )
}

export default Contact;