import { useState } from "react";

function ListInput({ setFirstList, setSecondList }) {

    const [selectedList, setSelectedList] = useState("");
    const [item, setItem] = useState("");


    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (item !== "") {

            if (selectedList === "one") {
                setFirstList((prevState) => [...prevState, item]);
            } else if (selectedList === "two") {
                setSecondList((prevState) => [...prevState, item]);
            } else {
                console.log("Please select a list");
            }

            setItem("");

        } else {
            console.log("Please input a value");
        }

    }

    return (
        <div style={{ border: "1px solid grey" }}>
            <center>
                <form onSubmit={onSubmitHandler}>

                    <label htmlFor="one">First List</label>
                    <input type="radio" name="listSelection" value="one" onChange={(e) => setSelectedList(e.target.value)} />
                    <label htmlFor="two">Second List</label>
                    <input type="radio" name="listSelection" value="two" onChange={(e) => setSelectedList(e.target.value)} />
                    <br />
                    <input
                        type="text"
                        placeholder="Input here..."
                        onChange={(e) => setItem(e.target.value)}
                        value={item}
                    />
                    <br />
                    <button type="submit">Add To List</button>
                </form>
            </center>
        </div>
    )
}

export default ListInput;