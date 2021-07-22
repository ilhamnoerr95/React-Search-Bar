import * as React from 'react'
import './SearchBar.css'





const SearchBar = (props)=>{
    const {searchNama, tipe} = props;

    const [searchValue, setSearchValue] = React.useState("")
        
    const handleChange = (event)=>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    const handleClear = ()=>{
        setSearchValue('')
    }
    
    const filterNama = searchNama.filter((name)=>{
        return name.includes(searchValue)
    })
    // console.log(
    //     nama.filter((name)=>{
    //         return name.includes("ilham")
    //     })
    // )

    // console.log(
    //     nama.map((nama)=>{
    //         return nama.toUpperCase()
    //     })
    // )

    // TODO:HASIL BOOLEAN TRUE OR FALSE
    const shouldDisplayButton = searchValue.length > 0
    console.log(shouldDisplayButton)

    return <div>
        <input type={tipe} value={searchValue} onChange={handleChange}/><br/>
        {searchValue}<br/>
        {/* APABILA KEADAANNYA TRUE MAKA BUTTON CLEAR AKAN MUNCUL */}
        {shouldDisplayButton && <button onClick={handleClear}>CLEAR</button>}

        {filterNama.map((name)=>{
            return <ul key={name}>
                    <li>{name}</li>
                </ul>
        })}
       
    </div>
}

export default SearchBar; 