function List({ listTitle, listItems }) {
    return (
        <div style={{ border: "1px solid green" }}>

            <center><h5>{listTitle}</h5></center>

            <ul>
                {
                    listItems.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default List;