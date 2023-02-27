import { useState } from "react";
import PropTypes from 'prop-types';
import { Searchbar, SearchForm, Button, ButtonLabel, SearchFormInput } from "./Searchbar.styled";
import { toast } from 'react-toastify';
import { BsSearch } from "react-icons/bs";

export default function Serchbar({ onSubmit }) {
   
    const [image, setImage] = useState('');

    const handleNameChange = e => {
        setImage(e.currentTarget.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (image.trim() === '') {
            return toast.warning('Enter your request');
        }
        onSubmit(image)
        setImage('')
    }

      return (
         <Searchbar>
                <SearchForm onSubmit={handleSubmit}>
                  <Button type="submit">      
                    <BsSearch size="20" /><ButtonLabel> </ButtonLabel>
                  </Button>
                 <SearchFormInput
                 
                     type="text"
                     autoComplete="off"
                     autoFocus
                     placeholder="Search images and photos"
                     value={image}
                     onChange={handleNameChange}
                 />
             </SearchForm>
         </Searchbar>
      )
    

}
Serchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    
}
