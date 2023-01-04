// import { Component } from "react";
import './search-box.styles.css'

const SearchBox = ({ placeholder, onChangeHandler, className }) => (
    <div>
        <input className={`search-box ${className}`}        //string interpolation
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}  //you can name it onChange instead of onChnageHandler
        />
    </div>
);

// class SearchBox extends Component {
//     render() {
//         const {placeholder, onChangeHandler, className} = this.props;
//         return (
//             <div>
//                 <input className={`search-box ${className}`}        //string interpolation
//                     type="search"
//                     placeholder={placeholder} 
//                     onChange={onChangeHandler}  //you can name it onChange instead of onChnageHandler
//                 />
//             </div>
//         )
//     }
// }

export default SearchBox;