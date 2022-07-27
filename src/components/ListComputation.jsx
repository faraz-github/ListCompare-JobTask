import { useState } from "react";

function ListComputation({ firstList, secondList }) {

    const [listResults, setListResults] = useState({
        onlyInFirst: [],
        onlyInSecond: [],
        presentInFirstAndSecond: [],
        uniqueInFirstAndSecond: []
    })

    const onlyInFirst = () => {
        const onlyInFirst = firstList.filter((item) => !secondList.includes(item));
        console.log(onlyInFirst);
        setListResults((prevState) => ({ ...prevState, onlyInFirst: onlyInFirst }));
    }

    const onlyInSecond = () => {
        const onlyInSecond = secondList.filter((item) => !firstList.includes(item));
        console.log(onlyInSecond);
        setListResults((prevState) => ({ ...prevState, onlyInSecond: onlyInSecond }));
    }

    const presentInFirstAndSecond = () => {
        const fullList = firstList.concat(secondList);
        const presentInFirstAndSecond = fullList.filter((item) => firstList.includes(item) && secondList.includes(item));
        const uniqueValues = presentInFirstAndSecond.filter((item, index, array) => array.indexOf(item) === index);
        console.log(uniqueValues);
        setListResults((prevState) => ({ ...prevState, presentInFirstAndSecond: uniqueValues }));
    }

    const uniqueInFirstAndSecond = () => {
        const fullList = firstList.concat(secondList);
        const uniqueValues = fullList.filter((item, index, array) => array.indexOf(item) === index);
        console.log(uniqueValues);
        setListResults((prevState) => ({ ...prevState, uniqueInFirstAndSecond: uniqueValues }));
    }

    const compute = () => {
        onlyInFirst();
        onlyInSecond();
        presentInFirstAndSecond();
        uniqueInFirstAndSecond();
    }


    return (
        <div>
            <center><button onClick={() => compute()}>Compute</button></center>
            <h5>Items Present Only In A</h5>
            {
                listResults.onlyInFirst.length
                    ? <ul>
                        {
                            listResults.onlyInFirst.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                    : null
            }
            <h5>Items Present Only In B</h5>
            {
                listResults.onlyInSecond.length
                    ? <ul>
                        {
                            listResults.onlyInSecond.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                    : null
            }
            <h5>Items Present In Both A And B</h5>
            {
                listResults.presentInFirstAndSecond.length
                    ? <ul>
                        {
                            listResults.presentInFirstAndSecond.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                    : null
            }
            <h5>Items Combining Both A And B Unique</h5>
            {
                listResults.uniqueInFirstAndSecond.length
                    ? <ul>
                        {
                            listResults.uniqueInFirstAndSecond.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                    : null
            }
        </div>
    )
}

export default ListComputation;