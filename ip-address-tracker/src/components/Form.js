import React from 'react';
import useForm from '../hooks/useForm';

export const Form = ({ setParam }) => {

    const [ formValues, handleInputChange, reset ] = useForm({
        ipAddressTracker: '',
    });
    const { ipAddressTracker } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('formSearch');
        if(!ipAddressTracker) {
            return;
        }
        setParam(ipAddressTracker);
        reset();
    };


    return (

        <div className="form__container">
            <form
                className="form__search"
                onSubmit={ handleSearch }
            >
                <div className="form__input-button-ipAddressTracker">
                    <input 
                        type="text"
                        name="ipAddressTracker"
                        placeholder="Search for any IP address or domain"
                        autoComplete="off"
                        onChange={ handleInputChange }
                        value={ ipAddressTracker }
                    />
                    <button
                        type="submit"
                    >
                        <span className="material-icons" style={{color: 'white'}}>keyboard_arrow_right</span>
                    </button>
                </div>
            </form>
        </div>

    );

};
