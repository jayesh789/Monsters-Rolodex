// import { Component } from "react";
import { ChangeEventHandler } from 'react';
import './search-box.styles.css'

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ 
    className, 
    placeholder, 
    onChangeHandler
}: SearchBoxProps) => (
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