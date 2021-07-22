import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'
import * as React from 'react'
//TODO: CODE REACT CREATE ELEMENT 
// const mySeCondElement = React.createElement(
//     'li', 
//     null, 
//     "ayam Goreng"
//     )
// const myFirstElement = React.createElement(
// 'ul', 
// null, 
// [React.createElement('li', null, "item1"), 
// React.createElement('li', null, "item2")]
// )

const nama = [
    'ilham', 
    'adit',
    'tania'
]

const lahir = [
    'Jakarta', 
    'Tangsel',
    'Tangsel'
]
    //TODO: FUNCTION javascript yg mereturn JSX
    const App = ()=>{
        // interpelation 
    const [namaState,setNamaState] = React.useState([])
    
    React.useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=> res.json())
        .then((covidArray)=>{
        const covidInfo = covidArray.map((covids)=>{
            return covids.title
        })
        setTimeout(()=>{
            setNamaState(covidInfo)
        }, 5000)
        })
        
        // setTimeout(()=>{
        //     setNamaState([
        //         'ilham', 
        //         'adit',
        //         'tania'
        //     ])
        // },2000)
    },[])

        let myItem = "text"

        // KONDISI TRUE
        const hasName = namaState.length > 0;

            return (
                <div>
                   {/* <ul>
                    <li>item 1123</li>
                        <li>item 2 au we</li>
                       <li>{myItem.toUpperCase()}</li>
                   </ul> */}
                        {/* <CountButton props={2} warna={"yellow"}/> */}
                        {/* <CountButton props={4} warna={"green"}/>
                       <CountButton props={6} warna={"blue"}/> */}

                    {hasName ?  <SearchBar tipe={{myItem}} searchNama={namaState}/> : "Loading.."}
                       
                   </div>
            // <div>
            //      <SearchBar tipe={{myItem}} searchNama={nama}/>
            //      <SearchBar tipe={{myItem}} searchNama={lahir}/>
            // </div>

            )
            //     // TODO: JSX CODE
            //    
                
                
        }

export default App;