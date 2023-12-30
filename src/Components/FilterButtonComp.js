import { useState } from "react";

function FilterButtonComp({ user, setUser }) {

    const [btn, setBtn] = useState(user)
    // console.log('btn ==>',btn);
    let carts = [...new Set(user.map((item) => item.category))]
    // console.log(carts);
    const handleFilter = (cat) => {
        // console.log(data);
        const filterItems = user.filter((item) => {
            return item.category === cat;
        })
        setUser(filterItems);
        console.log(filterItems);
        
    }

    return (
        <div>
            <h1>Buttons</h1>
            {/* {carts.map((item,id) => (
                <button key={id} onClick={() => handleFilter(item)}>{item}</button>
            )
            )} */}
            <button onClick={() => handleFilter('smartphone')}>smartphone</button>
            <button onClick={() => handleFilter('laptops')}>laptops</button>
            <button onClick={() => handleFilter('fragrances')}>fragrances</button>
        </div>
    )
}

export default FilterButtonComp;